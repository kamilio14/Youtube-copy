export default function Task(props) {
  const styles = {
    backgroundColor: props.checked ? "green" : "red",
    color: props.checked ? "#FFFFFF" : "black",
  };

  return (
    <div style={styles} className="individual-task">
      <h2 className="name-task">{props.task}</h2>
      <button onClick={props.onDelete} className="delete-btn">
        Delete
      </button>
      <input
        type="checkbox"
        onChange={() => props.checkedFunction()}
        className="checkbox-class"
      />
    </div>
  );
}
