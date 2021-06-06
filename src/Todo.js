import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const Todo = ({todo, toggleTodo}) => {
    function handleTodoClick (){
        toggleTodo(todo.id);
    }

    return (
        <>
            <Card style={{ width: '15rem' }}>
                <ListGroup className="labelContainer">
                    <label id="todoLabel">
                        <input id="todoInput" type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                        {todo.name}
                    </label>
                </ListGroup>
            </Card>
        </>

    );
};

export default Todo;
