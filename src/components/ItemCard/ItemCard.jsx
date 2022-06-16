import React from "react";
import "./ItemCard.scss";
import CheckBox from "../Checkbox/CheckBox";
import Button from "../Button/Button";

const ItemCard = ({
  label,
  checked,
  onCheckboxChange,
  handleDelete,
  displayCard,
  name,
}) => {
  return (
    <div>
      <div className="item-card">
        <CheckBox checked={checked} onCheckboxChange={onCheckboxChange} />
        {checked ? (
          <p className="inactive">{label}</p>
        ) : (
          <p className="active">{label}</p>
        )}
        <div onClick={handleDelete}>
          <Button buttonText="🗑" buttonStyle={name} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
