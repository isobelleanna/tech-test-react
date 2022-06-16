import React from "react";
import "./Nav.scss";
import Button from "../../components/Button/Button";

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav__title">My Todos</h1>
      <Button buttonStyle="button__nav" buttonText="Reset" />
    </div>
  );
};

export default Nav;
