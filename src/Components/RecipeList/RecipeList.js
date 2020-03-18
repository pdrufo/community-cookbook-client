import React from 'react'
import RecipeListItem from '../RecipeListItem/RecipeListItem'
import './RecipeList.css'

export default function RecipeList(){
  return (
    <section className='recipe-list'>
      <RecipeListItem  />
      <RecipeListItem  />
      
    </section>
  )
}