import React, { useState } from "react";
import Form from "./Form";
import {RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({todos, completeTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div
    >
      <div key={todo.id}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine 
          
        />
        <TiEdit />
      </div>
    </div>
  ));
}

export default Todo;
