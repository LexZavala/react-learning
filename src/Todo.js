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
                <ListGroup variant="flush">
                    <label id="todoLabel">
                        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                        {todo.name}
                    </label>
                </ListGroup>


            </Card>
        </>

    );
};

export default Todo;
