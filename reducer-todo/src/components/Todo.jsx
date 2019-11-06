import React from "react";

const Todo = props => {
  return (
    <div
      className={`item${props.item.completed ? 'completed' : ''}`}
      onClick={() => props.toggleCompleted(props.item.id)}>
      <p>{props.item.item}</p>

    </div>

  )
}

export default Todo;