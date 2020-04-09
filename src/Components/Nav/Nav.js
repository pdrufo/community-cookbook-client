import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
  return (
    <nav>
      <Link className='logo' to='/'>Community Cookbook</Link>
        <ul>
          <li><Link className='nav-item' to='/recipes'>All Recipes</Link></li>
          <li><Link className='nav-item' to='/add-recipe'>Add Recipe</Link></li>
        </ul>
    </nav>
  )
}
}
