import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import { useState } from "react";

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
  console.log(checked);
  return (
    <div className="App">
      <Nav onReset={onReset} />
      <Main
        handleSubmit={handleSubmit}
        activeList={listActive}
        todoArr={todoList}
        checked={checked}
        onCheckboxChange={onCheckboxChange}
      />
    </div>
  );
}

export default App;
