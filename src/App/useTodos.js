import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React.js", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    const isTodoCompleted = newTodos[todoIndex].completed;
    newTodos[todoIndex].completed = !isTodoCompleted;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const states = {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    openModal,
  };

  const statesUpdater = {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
  };
  return { states, statesUpdater };
}

export { useTodos };
