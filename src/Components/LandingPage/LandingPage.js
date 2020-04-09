import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage(){
  return(
      <main>
        <section className="hero">
          <h1>Community Cookbook</h1>
          <p>A place where you can browse some of my favorite recipes, whether they are weeknight go-to's or dinner party ready. You can also add some of your favorite recipes to share with our community. </p>
          <img src= {require('../../Images/home.png')} alt='logo' />
        </section>

        <section className="find-recipes">
           <Link to='/recipes' className='hover-effect'>
             <p> Start browsing recipes now or add your own</p>
          </Link>
        </section>
      </main>
  );
}