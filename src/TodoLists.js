const TodoLists = (props) => {
  return (
    <li>
      {props.text}{" "}
      <button
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        x
      </button>
    </li>
  );
};
export default TodoLists;
