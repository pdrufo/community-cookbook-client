import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import RecipeListItem from './RecipeListItem';
import renderer from 'react-test-renderer'


describe.skip('GET /workouts' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><RecipeListItem /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><RecipeListItem /></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })
})