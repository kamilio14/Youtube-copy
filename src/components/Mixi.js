import React from "react";
import Task from "./Task";

export default function Mixi() {
  const [task, setTask] = React.useState("");
  const [allTasks, setAllTasks] = React.useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleAddTask() {
    setTask("");
    setAllTasks((prevState) => {
      return [...prevState, { task, checked: false }];
    }); 
  }

  function handleDelete(index) {
    setAllTasks((prevState) => {
      const newArr = [...prevState];
      newArr.splice(index, 1);

      return newArr;
    });
  }

  function handleCheckChange(index) {
    setAllTasks((prevState) => {
      return prevState.map((item, loopIndex) => {
        return index === loopIndex ? { ...item, checked: !item.checked } : item;
      });
    });
  }

  return (
    <div className="task-card">
      <div className="all-tasks">
        <div className="inp-btn">
          <input
            onChange={handleChange}
            value={task}
            placeholder="Write Your Task"
            className="input-1"
          />
          <button onClick={handleAddTask} className="btn-2">
            Add
          </button>
        </div>

        <div className="all-tasks-all">
          {allTasks.map((item, index) => {
            return (
              <Task
                task={item.task}
                onDelete={() => handleDelete(index)}
                checkedFunction={() => handleCheckChange(index)}
                checked={item.checked}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
