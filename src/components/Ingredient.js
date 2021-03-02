import React from "react";

export default (props) => {
  const { name, qty, fraction, unit } = props.ingredient;
  return (
    <li className="Ingredient">
      <p>{`${name}: ${qty} ${fraction === "whole" ? "" : fraction} ${unit}${
        qty > 1 ? "s" : ""
      }`}</p>
    </li>
  );
};
