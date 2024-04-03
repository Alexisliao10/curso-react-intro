import "./TodoList.css";

function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading &&
        props.searchedTodos.length === 0 &&
        !props.totalTodos &&
        props.onEmpty()}
      {props.searchedTodos.map(props.render)}
      {props.totalTodos !== 0 &&
        props.searchedTodos.length === 0 &&
        props.onNotSeachFound()}
    </ul>
  );
}

export { TodoList };
