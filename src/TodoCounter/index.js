import React from "react";
import "./TodoCounter.css";
import clsx from "clsx";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  const message =
    completedTodos === totalTodos && totalTodos !== 0
      ? `¡Felicidades! Has completado todos los TODOs.`
      : `Has completado ${completedTodos} de ${totalTodos} TODOs`;
  return (
    <h1 className={clsx("TodoCounter", loading && "TodoCounter--loading")}>
      {message}
    </h1>
  );
}
export { TodoCounter };
