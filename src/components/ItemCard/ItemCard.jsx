import React from "react";
import "./ItemCard.scss";
import CheckBox from "../Checkbox/CheckBox";
import Button from "../Button/Button";

const ItemCard = ({ label, checked, onCheckboxChange }) => {
  return (
    <div className="item-card">
      <CheckBox checked={checked} onCheckboxChange={onCheckboxChange} />
      {checked ? (
        <p className="inactive">{label}</p>
      ) : (
        <p className="active">{label}</p>
      )}

      <Button buttonText="🗑" buttonStyle="button__item-card" />
    </div>
  );
};

export default ItemCard;
