import React from 'react'
import { findRecipe } from '../../recipe-helpers'
import ApiContext from '../../ApiContext'
import config from '../../config'
import './RecipeDetail.css'

export default class RecipeDetail extends React.Component{

state = {
  recipe: []
}

static defaultProps = {
  match: {
  params: {
    },
  onDeleteRecipe: () => {}
  }
}

static contextType = ApiContext;

componentDidMount() {
  const {id} = this.props.match.params
  fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(res => res.json())
    .then((data) => {
      if (!this.state.recipe) {
        this.setState({recipe: data})
       }
    })
    .catch(error => {
      console.error({error})
    })
}

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
  const recipe = findRecipe(recipes, id) || this.state.recipe
  
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
    <section className='instructions'>
      <h3>Instructions</h3>
      <ul>
        {recipe.instructions}
      </ul>
    </section>
    <section className='source'>
      <h3>Source</h3>
      <p>
        {recipe.source}
      </p>
    </section>
    <button onClick={this.handleClickDelete} className='recipe-delete' type='button'>
      delete
    </button>
  </main>
  )
}
}