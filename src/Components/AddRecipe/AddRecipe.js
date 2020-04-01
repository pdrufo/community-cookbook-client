import React from 'react'
import './AddRecipe.css'
import ApiContext from '../../ApiContext'
import config from '../../config'

export default class AddRecipe extends React.Component {

  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const newRecipe = {
      title: e.target['recipe-title'].value,
      ingredients: e.target['recipe-ingredients'].value,
      instructions: e.target['recipe-instructions'].value,
      source: e.target['recipe-source'].value
    }
  
    if (!newRecipe.title || !newRecipe.ingredients || !newRecipe.instructions || !newRecipe.source) {
      alert('Recipe title, ingredients, instructions, and source are all required')
    } else {
      fetch(`${config.API_ENDPOINT}/recipes`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newRecipe),
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(recipe => {
          this.context.addRecipe(recipe)
          this.props.history.push(`/recipes`)
        })
        .catch(error => {
          console.error({ error })
        })
    }
  }
  render() {
  return(
    <section className="add-recipe">
      <h3> Add New Recipe</h3>

      <form 
        className="add-recipe-form"
        onSubmit={this.handleSubmit}>

        <div className="form-section">
          <label htmlFor="recipe-title">Recipe Title</label>
          <input type="text" name="recipe-title" placeholder="Chicken Picatta" required />
        </div>

        <div className="form-section">
          <label htmlFor="recipe-ingredients">Add Ingredients</label>
          <textarea name="recipe-ingredients"  rows="5"placeholder="separate ingredients by comma"   required></textarea>
        </div>

        <div className="form-section">
          <label htmlFor="recipe-instructions">Add Instructions</label>
          <textarea name="recipe-instructions"  rows="5"   required></textarea>
        </div>

        <div className="form-section">
          <label htmlFor="recipe-source">Add Source</label>
          <textarea name="recipe-source"  rows="5" placeholder="e.g. NYTimes Food"   required></textarea>
        </div>

        <div className="form-section">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        </div>

    </form>
  </section>
  )
  }
}