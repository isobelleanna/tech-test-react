import React from "react";
import "./Main.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
import Message from "../../components/Message/Message";
import Form from "../../components/Form/Form";

const Main = ({ handleSubmit, activeList }) => {
  return (
    <div className="main">
      <Form handleSubmit={handleSubmit} />
      <ItemCard />
      <Message activeList={activeList} />
    </div>
  );
};

export default Main;
