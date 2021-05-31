import React, {useState, useRef} from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    function handleAddTodo (e){
       const name = todoNameRef.current.value;
        if (name === "") return
        console.log(name)
    }

  return (
      <>
        <TodoList todos = {todos} />
        <input ref={todoNameRef} type="text"/>
        <button onClick={handleAddTodo}>Add To Do</button>
        <button>Clear Completed ToDos</button>
        <div> 0 left to do </div>
      </>

  )
}


export default App;
