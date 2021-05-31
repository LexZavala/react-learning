import React, {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
import uuidv4 from 'uuid/dist/v4';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef();

    // THIS EFFECT IS ALLOWING US TO LOAD OUR STORED JSON TODOS IF ANY
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos) setTodos(storedTodos)
    }, []);

    // THIS EFFECT IS STORING THE TODOS TO BE PULLED NEXT TIME THE PAGE LOADS
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);

    /* THIS FUNCTION IS TAKING THE PARAMETER OF ID TO LOCATE THE MATCHING OBJECT AND IT
    TOGGLES THE CHECKMARK STATE OF COMPLETION*/
    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleClear(){
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos);
    }

    //THIS FUNCTION MAKING THE ADD BUTTON USE THE INPUT TO CREATE NEW TO DO OBJECTS
    function handleAddTodo (e){
       const name = todoNameRef.current.value;
        if (name === "") return;
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
        })
        todoNameRef.current.value = null
    }

  return (
      <>
        <TodoList todos = {todos} toggleTodo = {toggleTodo} />
        <input ref={todoNameRef} type="text"/>
        <button onClick={handleAddTodo}>Add To Do</button>
        <button onClick={handleClear}>Clear Completed ToDos</button>
        <div>{todos.filter(todo => !todo.complete).length} left to do </div>
      </>

  )
}


export default App;
