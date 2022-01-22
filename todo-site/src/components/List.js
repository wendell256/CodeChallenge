import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
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

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1> How's Your Day Looking?</h1>
      <Form onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default List;
