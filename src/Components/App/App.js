import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import RecipeList from '../RecipeList/RecipeList'
import RecipeDetail from '../RecipeDetail/RecipeDetail'
import AddRecipe from '../AddRecipe/AddRecipe'


class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <Nav />
          <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/recipes'} component={RecipeList} />
          <Route exact path={'/add-recipe'} component={AddRecipe} />
          <Route path={'/recipes/:id'} component={RecipeDetail} />
        <Footer />
      </div>
    );
  }
}
export default App;