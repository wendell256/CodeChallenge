import React, { useState, useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function FormTodo(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text:input
    })

    setInput("");
  };

  return (
    <Form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type Something To Do"
        value={input}
        name="text"
        classname="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <Button onClick={handleSubmit} className="todo-button">Add</Button>
    </Form>
  );
}

export default FormTodo;
