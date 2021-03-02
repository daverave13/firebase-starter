import React, { useState } from "react";
import AddItem from "./AddItem";
import createRecipe from "../firebase/createRecipe";

export default (props) => {
  const [Id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const onInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  const addIngredientClick = (e) => {
    e.preventDefault();
    const ids = [...ingredients.map((ingredient) => ingredient.id)];
    // I know Math.max() should work here but it was causing errors when adding to id variable in ingredients.push
    let maxId = 0;
    for (const id of ids) maxId = id > maxId ? id : maxId;
    ingredients.push({
      name: "",
      qty: 1,
      uom: "cup",
      fracion: "whole",
      id: maxId + 1,
    });
    setIngredients([...ingredients]);
  };

  const cancelAddIngredientClick = (id) => {
    const filteredIngredients = ingredients.filter(
      (ingredient) => ingredient.id != id
    );
    setIngredients([...filteredIngredients]);
  };

  const checkIngredients = () => {
    let passedBool = true;
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].name.length < 1) passedBool = false;
      if (ingredients[i].qty < 1) passedBool = false;
    }
    return passedBool;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(checkIngredients());
    if (
      Id !== "" &&
      title !== "" &&
      instructions !== "" &&
      checkIngredients()
    ) {
      createRecipe(Id, title, instructions, ingredients);
      setTitle("");
      setId("");
      setInstructions("");
      setIngredients([]);
    } else
      alert(
        "Please fill out the entire form. Ingredients must have a quantity of at least one and must be named."
      );
  };

  const onIngredientUpdate = (id, name, qty, uom) => {
    const filtered = ingredients.filter((ingredient) => ingredient.id != id);
    filtered.push({ id, name, qty, uom });
    setIngredients([...filtered]);
  };

  const sortedIngredients = ingredients.sort((a, b) => a.id - b.id);

  const mappedIngredients = sortedIngredients.map((ingredient) => {
    return (
      <AddItem
        ingredient={ingredient}
        onIngredientUpdate={onIngredientUpdate}
        onIngredientCancel={cancelAddIngredientClick}
        key={ingredient.id}
      />
    );
  });

  return (
    <div className="setRecipe">
      <h1>Recipe Details</h1>
      <form className="form" action="">
        <label htmlFor="id">ID</label>
        <input type="number" name="id" value={Id} onChange={onIdChange} />

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onTitleChange}
        />

        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          cols="30"
          rows="10"
          value={instructions}
          onChange={onInstructionsChange}
        ></textarea>

        <label htmlFor="ingredients">Ingredients</label>
        {mappedIngredients}
        <button className="btn-add-ingredient" onClick={addIngredientClick}>
          Add Ingredient
        </button>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};
