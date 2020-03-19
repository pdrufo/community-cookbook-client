import React from 'react'
import './AddRecipe.css'

export default function AddRecipe(){
  return(
    <section className="add-recipe">
      <form className="add-recipe-form">
        <div className="form-section">
          <label htmlFor="recipe-title">Recipe Title</label>
          <input type="text" name="recipe-title" placeholder="Chicken Picatta" required />
        </div>
        <div className="form-section">
          <label htmlFor="recipe-ingredients">Add Ingredients</label>
          <textarea name="recipe-ingredients"  rows="5"placeholder="separate ingredients by comma"   required></textarea>
        </div>
        <div className="form-section">
          <label htmlFor="recipe-directions">Add Directions</label>
          <textarea name="recipe-directions"  rows="5"   required></textarea>
        </div>
        <div className="form-section">
          <label htmlFor="recipe-source">Add Source</label>
          <textarea name="recipe-ingredients"  rows="5" placeholder="e.g. NYTimes Food"   required></textarea>
        </div>
        <div className="form-section">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        </div>
    </form>
  </section>
  )
}