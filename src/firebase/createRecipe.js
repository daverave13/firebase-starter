import database from "./database";

const createRecipe = (Id, name, instructions, ingredients) => {
  database()
    .ref("recipes/")
    .set({
      name: name,
      instructions: instructions,
      ingredients,
    });
};

export default createRecipe;
