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



export function LoadTodos (){
  const items = { ...localStorage };
  if (items.length <= 0){
    return []
  }
  
  var todos = [];
  for(var key in items) {
    var value = items[key];
    var completed = false
    if (value.startsWith("true")){
      completed = true
    }
   
    var input = value.substring(value.indexOf("|")+1)
    var todo = {
      id:key,
      text : input,
      isComplete : completed
    }
    todos = [...todos,todo]
  }
  return todos
 

  
}

export function changeCompleteState(id){
    var completed = true
    var value = localStorage.getItem(id)
    if (value.startsWith("true")){
      completed = false
    }
   
    value = value.substring(value.indexOf("|"))
    value = completed+value;
    localStorage.setItem(id,value)
}

export function DelAll(){
  localStorage.clear()
}

export function editTodo(id,value){
  localStorage.setItem(id,value)
}