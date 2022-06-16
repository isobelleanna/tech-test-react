import React from "react";
import "./Main.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
import Message from "../../components/Message/Message";
import Form from "../../components/Form/Form";

const Main = () => {
  return (
    <div className="main">
      <Form />
      <ItemCard />
      <Message />
    </div>
  );
};

export default Main;
