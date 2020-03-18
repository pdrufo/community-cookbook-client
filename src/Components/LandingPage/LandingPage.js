import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage(){
  return(
    <div className="landing-page-container">
      <main role="main">
        <header role="banner">
            <h1>Community Cookbook Logo</h1>
        </header>

        <section>
          <h2>Welcome to my Community Cookbook</h2>
            <p>A place where you can browse some of my favorite recipes, whether they are weeknight go-to's or dinner party ready. You can also add some of your favorite recipes to share with our community. </p>
        </section>

        <section>
            <h3>Start Browsing Now</h3>
            <Link to="recipes">
            <button type='button'>Let's get started</button>
            </Link>
        </section>
      </main>
  
    </div>
  );

}