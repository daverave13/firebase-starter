import React, { useEffect, useState } from "react";
import cancelSVG from "../cancel.svg";

export default (props) => {
  const [name, setName] = useState(props.ingredient.name);
  const [qty, setQty] = useState(props.ingredient.qty);
  const [unit, setUnit] = useState(props.ingredient.uom);
  const [fraction, setFraction] = useState(props.ingredient.fraction);
  const [id, setId] = useState(props.ingredient.id);

  useEffect(() => {
    props.onIngredientUpdate(id, name, qty, unit, fraction);
  }, [name, qty, unit, id, fraction]);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onQtyChange = (e) => {
    setQty(e.target.value);
  };

  const onFractionalSelectChange = (e) => {
    setFraction(e.target.value);
  };

  const onUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  const onCancel = () => {
    props.onIngredientCancel(id);
  };

  return (
    <div className="AddItem" key={id}>
      <label htmlFor="ingredient">Ingredient: </label>
      <input
        type="text"
        name="ingredient"
        id="ingredient"
        placeholder="New Ingredient"
        onChange={onNameChange}
      />
      <label htmlFor="qty">Quantity: </label>
      <input type="number" value={qty} onChange={onQtyChange} />
      <label htmlFor="unit">Unit: </label>
      <select
        name="fractionalSelect"
        id="fractionalSelect"
        onChange={onFractionalSelectChange}
      >
        <option value="whole">whole</option>
        <option value="half">½</option>
        <option value="third">⅓</option>
        <option value="quarter">¼</option>
        <option value="eighth">⅛</option>
      </select>
      <select name="unit" id="unit" onChange={onUnitChange}>
        <option value="cup">Cup</option>
        <option value="quart">Quart</option>
        <option value="pint">Pint</option>
        <option value="gallon">Gallon</option>
        <option value="tsp">Tsp</option>
        <option value="tbsp">Tbsp</option>
        <option value="pinch">Pinch</option>
        <option value="oz">Ounces</option>
        <option value="foz">Fluid Ounces</option>
        <option value="grams">Grams</option>
        <option value="ml">Milliliter</option>
        <option value="none">No Unit</option>
      </select>
      <img
        src={cancelSVG}
        alt="cancel button"
        className="cancel-btn"
        onClick={onCancel}
      />
    </div>
  );
};
