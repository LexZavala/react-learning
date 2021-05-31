import React, {useState} from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(['Todo1', 'Todo2'])
  return (
      <>
        <TodoList todos = {todos} />
        <input type="text"/>
        <button>Add To Do</button>
        <button>Clear Completed ToDos</button>
        <div> 0 left to do </div>
      </>

  )
}

export default App;
