import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  return (
    <form className="todo-form">
      <input
        type='text'
        placeholder='What will you do today?'
        value={input}
        name='text'
        classname='todo-input'
      />
      <button className='todo-button'>Add</button>
    </form>
  );
}

export default Form;
