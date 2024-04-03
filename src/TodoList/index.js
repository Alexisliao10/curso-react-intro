import "./TodoList.css";

function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && props.searchedTodos.length === 0 && props.onEmpty()}
      {props.searchedTodos.map(props.render)}
    </ul>
  );
}

export { TodoList };
