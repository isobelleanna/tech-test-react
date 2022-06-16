import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import { useState } from "react";

function App() {
  const [todoList, setToDoList] = useState([]);
  const [listActive, setListActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoList.length === 1) {
      toggleTodoList();
    }
    const newItem = {
      id: todoList.length + 1,
      item: event.target[0].value,
    };
    setToDoList([todoList, newItem]);
    event.target.reset();
  };

  const toggleTodoList = () => {
    setListActive(!listActive);
  };
  console.log(todoList);
  console.log(listActive);
  return (
    <div className="App">
      <Nav />
      <Main handleSubmit={handleSubmit} activeList={listActive} />
    </div>
  );
}

export default App;
