import {createContext, useContext } from "react";

export const TodoContext=createContext({
  todos:[
    {
      id:1,
      todo:"Write your todo",
      completed:false
    }
  ],
  addToDo:(todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  todoComplete:(id)=>{},
});

export const useTodo=()=>{
  return useContext(TodoContext);
}

export const ToDoProvider=TodoContext.Provider;