import React from "react";
import "./Main.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
import Message from "../../components/Message/Message";
import Form from "../../components/Form/Form";

const Main = ({ handleSubmit, activeList, todoArr }) => {
  return (
    <div className="main">
      <Form handleSubmit={handleSubmit} />
      {todoArr.map((item) => (
        <ItemCard key={item.id} label={item.item} />
      ))}

      <Message activeList={activeList} />
    </div>
  );
};

export default Main;
