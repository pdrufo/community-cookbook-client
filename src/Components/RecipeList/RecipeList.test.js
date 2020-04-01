import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import RecipeList from './RecipeList';
import renderer from 'react-test-renderer'


describe('GET /recipes' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><RecipeList /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><RecipeList /></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })
})