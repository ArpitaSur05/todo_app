import "./App.css";
import TodoLists from "./TodoLists";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState("");
  const [item, setItem] = useState([]);

  const items = (event) => {
    return setTodoList(event.target.value);
  };

  const deleteItem = (id) => {
    console.log("deleted");
    setItem((oldValues) => {
      return oldValues.filter((arrElmnts, index) => {
        return id !== index;
      });
    });
  };

  const addTodo = () => {
    setItem((oldValues) => {
      return [...oldValues, todoList];
    });
    setTodoList(" ");
  };
  return (
    <div>
      <div>
        <h2>
          Enter your todo items :
          <input
            type="text"
            placeholder="Add a todo item"
            value={todoList}
            onChange={items}
          ></input>
          <button onClick={addTodo}>ADD</button>
        </h2>
        <ol>
          {item.map((itemVal, index) => {
            return (
              <TodoLists
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
