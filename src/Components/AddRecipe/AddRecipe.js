import React from "react";
import "./AddRecipe.css";
import ApiContext from "../../ApiContext";
import config from "../../config";

/**AddRecipe will allow a user to input values into a form and POST the new recipe to the recipe database */
export default class AddRecipe extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  static contextType = ApiContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title: e.target["recipe-title"].value,
      ingredients: e.target["recipe-ingredients"].value,
      instructions: e.target["recipe-instructions"].value,
      source: e.target["recipe-source"].value,
    };

    if (
      !newRecipe.title ||
      !newRecipe.ingredients ||
      !newRecipe.instructions ||
      !newRecipe.source
    ) {
      alert(
        "Recipe title, ingredients, instructions, and source are all required"
      );
    } else {
      fetch(`${config.API_ENDPOINT}/recipes`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
          return res.json();
        })
        .then((recipe) => {
          this.context.addRecipe(recipe);
          this.props.history.push(`/recipes`);
        })
        .catch((error) => {
          console.error({ error });
        });
    }
  };
  render() {
    return (
      <section className="add-recipe">
        <h3> Add New Recipe</h3>
        <form className="add-recipe-form" onSubmit={this.handleSubmit}>
          <div className="form-section">
            <label htmlFor="recipe-title">
              Recipe Title
              <input
                aria-label="input for label"
                type="text"
                name="recipe-title"
                placeholder="Chicken Picatta"
                required
              />
            </label>
          </div>

          <div className="form-section">
            <label htmlFor="recipe-ingredients">
              Add Ingredients
              <textarea
                aria-label="input for label"
                name="recipe-ingredients"
                rows="5"
                placeholder="separate ingredients by comma"
                required
              />
            </label>
          </div>

          <div className="form-section">
            <label htmlFor="recipe-instructions">
              Add instructions
              <textarea
                aria-label="input for label"
                name="recipe-instructions"
                rows="5"
              />
            </label>
          </div>

          <div className="form-section">
            <label htmlFor="recipe-source">
              Add Source
              <textarea
                aria-label="input for label"
                name="recipe-source"
                rows="5"
                placeholder="e.g. NYTimes Food"
                required
              />
            </label>
          </div>

          <div className="form-section">
            <button type="submit">Submit</button>
            <button type="reset" className="reset-button">
              Reset
            </button>
          </div>
        </form>
      </section>
    );
  }
}
