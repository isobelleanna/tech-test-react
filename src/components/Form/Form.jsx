import React from "react";

const Form = ({ handleSubmit, getInput }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="todo" onInput={getInput} />
      </label>
      <input type="submit" value="➕" />
    </form>
  );
};

export default Form;
