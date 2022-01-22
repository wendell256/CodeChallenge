import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

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
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What will you do today?"
        value={input}
        name="text"
        classname="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Add</button>
    </form>
  );
}

export default Form;
