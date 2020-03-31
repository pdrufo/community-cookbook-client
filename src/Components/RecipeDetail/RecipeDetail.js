import React from 'react'
import { findRecipe } from '../../recipe-helpers'
import ApiContext from '../../ApiContext'

export default class RecipeDetail extends React.Component{
static defaultProps = {
  match: {
    params: {

    }
  }
}
static contextType = ApiContext;

handleDeleteRecipe = recipeId => {
  this.props.history.push(`/`)
}

render(){
  const { recipes=[] } = this.context
  const { id } = this.props.match.params
  console.log(recipes)
  console.log(this.context)
  const recipe = findRecipe(recipes, id)
  
  return (
    <main className='recipe-detail'>
    <header>
      <h2>{recipe.title}</h2>
    </header>
    <section className="ingredients">
    <h3>Ingredients</h3>
      <p>
        {recipe.ingredients}
      </p>
    </section>
    <section>
      <h3>Instructions</h3>
      <ul>
        {recipe.instructions}
      </ul>
    </section>
    <section>
      <h3>Source</h3>
      <p>
        {recipe.source}
      </p>
    </section>

  </main>
  )
}
}