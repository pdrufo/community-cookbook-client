import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import RecipeList from "../RecipeList/RecipeList";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import AddRecipe from "../AddRecipe/AddRecipe";
import config from "../../config";
import ApiContext from "../../ApiContext";

class App extends React.Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    Promise.all([fetch(`${config.API_ENDPOINT}/recipes`)])
      .then(([recipesRes]) => {
        if (!recipesRes.ok)
          return recipesRes.json().then((e) => Promise.reject(e));

        return Promise.all([recipesRes.json()]);
      })
      .then(([recipes]) => {
        this.setState({ recipes });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  handleAddRecipe = (newRecipe) => {
    this.setState({
      recipes: [...this.state.recipes, newRecipe],
    });
  };

  handleDeleteRecipe = (recipeId) => {
    this.setState({
      recipes: this.state.recipes.filter(
        (recipe) => recipe.id !== parseInt(recipeId)
      ),
    });
  };

  render() {
    const value = {
      recipes: this.state.recipes,
      addRecipe: this.handleAddRecipe,
      deleteRecipe: this.handleDeleteRecipe,
    };

    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Nav />
          <Route exact path={"/"} component={LandingPage} />
          <Route exact path={"/recipes"} component={RecipeList} />
          <Route exact path={"/add-recipe"} component={AddRecipe} />
          <Route path={"/recipes/:id"} component={RecipeDetail} />
          <Footer />
        </div>
      </ApiContext.Provider>
    );
  }
}
export default App;
