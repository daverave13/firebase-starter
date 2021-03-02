import React from "react";
import Ingredient from "./Ingredient";

export default () => {
  const testRecipeData = {
    name: "Lorem Soup",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia veniam animi tempore ipsum commodi maiores! In, vitae explicabo alias quasi facere consectetur iure excepturi odit exercitationem nisi a commodi!",
    ingredients: [
      {
        id: 1,
        name: "broth",
        qty: 2,
        unit: "cup",
        fraction: "whole",
      },
    ],
  };

  const ingredients = testRecipeData.ingredients.map((ingredient) => (
    <Ingredient ingredient={ingredient} key={ingredient.id} />
  ));

  return (
    <div className="Recipe">
      <h3>{testRecipeData.name}</h3>
      <p>{testRecipeData.instructions}</p>
      <ul className="Ingredients">{ingredients}</ul>
    </div>
  );
};
