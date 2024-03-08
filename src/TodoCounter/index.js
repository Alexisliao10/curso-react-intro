import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";
function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  const message =
    completedTodos === totalTodos && totalTodos !== 0
      ? `¡Felicidades! Has completado todos los TODOs.`
      : `Has completado ${completedTodos} de ${totalTodos} TODOs`;
  return <h1 className="TodoCounter">{message}</h1>;
}
export { TodoCounter };
