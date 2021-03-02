import database from "./database";

const getRecipes = () => {
  database
    .ref("recipes/")
    .get()
    .then(function(snapshot) {
      if (snapshot.exists()) {
        const data = snapshot.val;
        return data;
      }
    });
};

export default getRecipes;
