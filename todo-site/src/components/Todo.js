import React, { useState } from "react";
import FormTodo from "./FormTodo";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    isComplete: false
  });


  const submitUpdate = (id, isComplete) => {
    var value = prompt('Please Edit Your To-Do')

    updateTodo(id, value, isComplete);
    /*setEdit({
      id: ,
      value: "",
    });*/
  };


  return todos.map((todo, index) => (
    <ListGroup  >
      <ListGroup.Item key={todo.id} className='Todo-items' >
       
        <Row>
        <Col sm={1}>
          <Form.Check className='Todo-checkbox' type='checkbox' checked = {todo.isComplete} onChange={() => completeTodo(todo.id)}/>
        </Col>
          <Col xs={8} >{todo.text}</Col>
          <Col className='Todo-badge'>
            <Badge bg="secondary" className='Todo-badge'>
              <div className="icons">
                <RiCloseCircleLine
                  onClick={() => removeTodo(todo.id)}
                  className="delete-icon"
                />
                <TiEdit
                  onClick={() => submitUpdate(todo.id, todo.isComplete)}
                  className="edit-icon"
                />
              </div>
            </Badge>
          </Col>
          </Row>
       
      </ListGroup.Item>
    </ListGroup>
  ));
}

export default Todo;
