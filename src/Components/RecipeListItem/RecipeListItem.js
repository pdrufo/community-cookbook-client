import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeListItem(props) {
  return (
    <div className="recipe-list-item">
      <h3><Link to={`/recipes/${props.data.id}`}>{props.data.title}</Link></h3>
      <p>{props.data.source}</p>
    
    </div>
  )
}