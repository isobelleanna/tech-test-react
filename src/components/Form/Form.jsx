import React from "react";
import Button from "../Button/Button";

const Form = () => {
  return (
    <form className="form" action="">
      <label htmlFor="">
        <input type="text" />
      </label>
      <Button buttonText="➕" buttonStyle="button__form" />
    </form>
  );
};

export default Form;
