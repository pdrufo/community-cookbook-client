import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to='/recipes'>All Recipes</Link> 
      <Link to='/'>Home</Link>
      <Link to='/add-recipe'>Add Recipe</Link>
      
    </nav>
  )
}

