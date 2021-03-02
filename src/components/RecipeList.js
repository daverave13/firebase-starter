import React from "react";
import getRecipes from "../firebase/getRecipes";
import Recipe from "./Recipe";

export default (props) => {
  const recipes = getRecipes();
  console.log(recipes);
  // const renderedRecipes = recipes.map((recipe) => <Recipe />);

  return <div className="RecipeList">{null}</div>;
};
