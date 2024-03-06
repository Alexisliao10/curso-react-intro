import "./TodoCounter.css";
function TodoCounter({ total, completed }) {
  const message =
    completed === total && total !== 0
      ? `¡Felicidades! Has completado todos los TODOs.`
      : `Has completado ${completed} de ${total} TODOs`;
  return <h1 className="TodoCounter">{message}</h1>;
}
export { TodoCounter };
