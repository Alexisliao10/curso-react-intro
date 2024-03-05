import "./TodoCounter.css";
function TodoCounter({ total, completed }) {
  const message =
    completed === total
      ? `¡Felicidades! Has completado todos los TODOs.`
      : `Has completado ${completed} de ${total} TODOs`;
  return <h1 className="TodoCounter">{message}</h1>;
}
export { TodoCounter };
