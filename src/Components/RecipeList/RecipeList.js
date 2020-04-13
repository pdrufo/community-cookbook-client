import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import "./RecipeList.css";
import ApiContext from "../../ApiContext";

/**RecipeList displays the dynamic list of recipes stored in the database */
export default class RecipeList extends React.Component {
  static contextType = ApiContext;

  render() {
    const recipes = this.context.recipes.map((recipe, idx) => (
      <RecipeListItem key={idx} data={recipe} />
    ));

    return (
      <div>
        <section className="recipe-list">
          <h2>All Recipes</h2>
          {recipes}
        </section>
      </div>
    );
  }
}
