import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Todo = ({todo, toggleTodo}) => {
    function handleTodoClick (){
        toggleTodo(todo.id);
    }

    return (
        <>
            <Card className="todoContainer" style={{ width: '15rem' }}>
                <ListGroup  className="labelContainer">
                        <ListGroupItem className="groupItem" ><input className="todoInput" type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>{todo.name}</ListGroupItem>
                </ListGroup>
            </Card>
        </>
    );
};

export default Todo;
