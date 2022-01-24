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
  });


  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <FormTodo edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <ListGroup>
      <ListGroup.Item key={todo.id}>
        <Container ms-2 me-auto>
        <Row>
        <Col>
          <Form.Check type='checkbox' checked = {todo.isComplete} onChange={() => completeTodo(todo.id)}/>
        </Col>
          <Col>{todo.text}</Col>
          <Col>
            <Badge bg="secondary" >
              <div className="icons">
                <RiCloseCircleLine
                  onClick={() => removeTodo(todo.id)}
                  className="delete-icon"
                />
                <TiEdit
                  onClick={() => setEdit({ id: todo.id, value: todo.text })}
                  className="edit-icon"
                />
              </div>
            </Badge>
          </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    </ListGroup>
  ));
}

export default Todo;
