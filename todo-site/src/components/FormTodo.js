import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
function FormTodo(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });

    setInput("");
  };

  return (
    <Form className="formtodo-form" onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col sm={8}>
            <Form.Group className="FormTodo-input">
              <Form.Control
                type="text"
                placeholder="Type Something To Do"
                value={input}
                name="text"
                onChange={handleChange}
                ref={inputRef}
              />
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Button
              variant="primary"
              type="submit"
              className="FormTodo-submitButton"
              
            >
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default FormTodo;
