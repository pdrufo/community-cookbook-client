import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import AddRecipe from '././AddRecipe';
import renderer from 'react-test-renderer'


describe('Add Recipe' , () => {


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><AddRecipe /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><AddRecipe /></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })

  
})