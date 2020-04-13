export const findRecipe = (recipes = [], recipeId) =>
  recipes.find((recipe) => recipe.id === parseInt(recipeId));

export const findIngredients = (recipes = [], recipeId) =>
  recipes.find((recipe) => recipe.ingredients === parseInt(recipeId));
