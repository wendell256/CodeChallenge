import React, { useState, useEffect } from "react";
import FormTodo from "./FormTodo";
import Todo from "./Todo";
import Button from 'react-bootstrap/Button'
import {DelSelected,AddItem,LoadTodos} from '../todo-backend/functions.js'

function List() {

  const [todos, setTodos] = useState(LoadTodos());

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }
  
    const newTodos = [...todos, todo]
    
    AddItem(todo.id, todo.text, todo.isComplete)
    setTodos(newTodos)
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    DelSelected(id) //backend
    setTodos(removeArr);
  }

  const removeSelectedTodo = todos => {
    for(const todo of todos){
      if (todo.isComplete){
        removeTodo(todo.id) //frontend
        
      }
    }
  
  }
  

  const updateTodo =(todoId, newValue) =>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id){
        console.log(todo.isComplete)
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  

  return (
    
    <div>
      <h1> How's Your Day Looking?</h1>
      <FormTodo onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      <Button  className="del-button" onClick={() => removeSelectedTodo(todos)}>Delete Selected</Button>
      <Button  className="del-button">Delete All</Button>
    </div>
  );
}

export default List;
