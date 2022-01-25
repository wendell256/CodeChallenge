import React, { useState, useEffect } from "react";
import FormTodo from "./FormTodo";
import Todo from "./Todo";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import '../Style.css'
import {
  DelSelected,
  AddItem,
  LoadTodos,
  changeCompleteState,
  DelAll,
  editTodo,
} from "../todo-backend/functions.js";

function List() {
  const [todos, setTodos] = useState(LoadTodos());

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [...todos, todo];

    AddItem(todo.id, todo.text, todo.isComplete);
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = todos.filter((todo) => todo.id !== id);
    DelSelected(id); //backend
    setTodos(removeArr);
  };

  const removeSelectedTodo = (todos) => {
    var arr = [...todos];
    for (const item of todos) {
      if (item.isComplete) {
        var tempId = item.id;
        arr = arr.filter((todo) => todo.id !== tempId); //frontend
        DelSelected(tempId); //backend
      }
    }

    setTodos(arr);
  };

  const removeAll = (todos) => {
    DelAll(); //backend
    setTodos([]);
  };

  const updateTodo = (todoId, Value, completeState) => {
    const newValue = {
      id: todoId,
      text: Value,
      isComplete: completeState,
    };
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    
    editTodo(todoId, newValue);
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        changeCompleteState(todo.id);
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='bg'>
      <Container >
        <h4 className='list-header'> How's Your Day Looking?</h4>
      </Container>
      <Container>
      <FormTodo onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <Button variant="outline-primary" className="del-button" onClick={() => removeSelectedTodo(todos)}>
        Delete Selected
      </Button>
      <Button variant="outline-primary" className="del-button" onClick={() => removeAll(todos)}>
        Delete All
      </Button>
      </Container>
  </div>
  );
}

export default List;
