import React from 'react'
import RecipeListItem from '../RecipeListItem/RecipeListItem'
import './RecipeList.css'

export default function RecipeList(){
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
      <RecipeListItem  />
      <RecipeListItem  />
    </section>
    </div>
  )
}