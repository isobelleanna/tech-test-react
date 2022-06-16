import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import { useState } from "react";

/// if I had more time I would finish the styling  and make the delete button work

function App() {
  const [todoList, setTodoList] = useState([]);
  const [listActive, setListActive] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: todoList.length + 1,
      item: event.target[0].value,
    };
    setTodoList([...todoList, newItem]);
    event.target.reset();
    if (todoList.length === 0) {
      setListActive(true);
    }
  };

  const onReset = () => {
    setTodoList([]);
    setListActive(false);
  };

  const onCheckboxChange = () => {
    setChecked(!checked);
  };
  const handleDelete = (event) => {
    console.log(event.target);
  };

  return (
    <div className="app">
      <Nav onReset={onReset} />
      <Main
        handleSubmit={handleSubmit}
        activeList={listActive}
        todoArr={todoList}
        checked={checked}
        onCheckboxChange={onCheckboxChange}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
