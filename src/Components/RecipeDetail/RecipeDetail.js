import React from 'react'
import { findRecipe } from '../../recipe-helpers'
import ApiContext from '../../ApiContext'
import config from '../../config'

export default class RecipeDetail extends React.Component{
static defaultProps = {
  match: {
    params: {

    },
    onDeleteRecipe: () => {}
  }
}
static contextType = ApiContext;

handleClickDelete = e => {
  e.preventDefault()
  const {id} = this.props.match.params

  fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(() => {
      this.context.deleteRecipe(id)
      this.props.history.push(`/recipes`)
      
    })
    .catch(error => {
      console.error({error})
    })
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
    <button onClick={this.handleClickDelete} className='recipe__delete' type='button'>
      delete
    </button>
  </main>
  )
}
}