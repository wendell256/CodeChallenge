import React from "react";

export const AddItem = (id, text, isComplete) =>{
  localStorage.setItem(id,isComplete + '|' + text);
}

export const DelSelected = (key) =>{
  localStorage.removeItem(key);
}

export const EditItem = (key) =>{
  localStorage.removeItem(key);
}

/*export const LoadTodos = () =>{
  const items = { ...localStorage };
  console.log(items)
  return []
}*/

export function LoadTodos (){
  const items = { ...localStorage };
  if (items.length <= 0){
    return []
  }
  /*for(todo in items){
    console.log(todo.id)
  }*/
  console.log(items)
  return []
 
}