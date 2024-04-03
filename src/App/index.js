import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoHeader } from "../TodoHeader";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();
  return (
    <>
      <TodoHeader>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        onEmpty={() => <TodosEmpty />}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      ></TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
