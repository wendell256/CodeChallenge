import React, { useState } from "react";
import Form from "./Form";
function List() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }
  
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    console.log(todo, ...todos)
  }

  return (
    <div>
      <h1> How's Your Day Looking?</h1>
      <Form onSubmit={addTodo}/>
    </div>
  );
}

export default List;
