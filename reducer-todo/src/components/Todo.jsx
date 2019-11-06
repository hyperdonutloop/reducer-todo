import React from "react";

const Todo = props => {
  console.log(props.item);
  
  return (
    <div
      className={`item${props.item.completed ? 'completed' : ''}`}
      onClick={() => props.toggleCompleted(props.item.id)}
    >
      <p>{props.item.item}</p>

    </div>

  )
}

export default Todo;