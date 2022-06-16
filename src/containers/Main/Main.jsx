import React from "react";
import "./Main.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
import Message from "../../components/Message/Message";
import Form from "../../components/Form/Form";

const Main = ({
  handleSubmit,
  activeList,
  todoArr,
  checked,
  onCheckboxChange,
  handleDelete,
}) => {
  return (
    <div className="main">
      <Form handleSubmit={handleSubmit} />
      {todoArr.map((item) => (
        <ItemCard
          key={item.id}
          label={item.item}
          checked={checked}
          onCheckboxChange={onCheckboxChange}
          handleDelete={handleDelete}
          name={item.id}
        />
      ))}

      <Message activeList={activeList} />
    </div>
  );
};

export default Main;
