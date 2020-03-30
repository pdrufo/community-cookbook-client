import React from 'react'
import RecipeListItem from '../RecipeListItem/RecipeListItem'
import './RecipeList.css'
import ApiContext from '../../ApiContext'


export default class RecipeList extends React.Component {

  static contextType = ApiContext;

  render() {
    const recipes = this.context.recipes.map((recipe, idx) =>
    <RecipeListItem key={idx} data={recipe} />
    );
  return (
    <div>
    <section className="recipe-search">
      <form className="recipe-search-form">
       <div className="form-section">
          <label htmlFor="recipe-search">Find a recipe:</label>
          <input type="text" name="recipe-search" />
       {/* </div>
       <div className="form-section"> */}
         <button type="submit">Submit</button>
      </div>
      </form>
    </section>
    <section className='recipe-list'>
      {recipes}
    </section>
    </div>
  )
}
}