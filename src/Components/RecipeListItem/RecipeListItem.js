import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeListItem.css'

export default function RecipeListItem(props) {
  return (
    <Link to={`/recipes/${props.data.id}`}>
       <div className="recipe-list-item">
        <h3 className='recipe-list-details'>{props.data.title}</h3>
        <p className='recipe-list-details'>{props.data.source}</p>
       </div>

    </Link>
  )
}


