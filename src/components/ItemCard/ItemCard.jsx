import React from "react";
import "./ItemCard.scss";
import CheckBox from "../Checkbox/CheckBox";
import Button from "../Button/Button";

const ItemCard = () => {
  return (
    <div className="item-card">
      <CheckBox />
      <p className="item-card__content">Todo</p>
      <Button buttonText="🗑" buttonStyle="button__item-card" />
    </div>
  );
};

export default ItemCard;
