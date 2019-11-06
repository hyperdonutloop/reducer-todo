import React from 'react';

const TodoForm = (props) => {

  return (
    <div className="tasks">
     <form onSubmit={props.handleSubmit}>
       <label htmlFor="item">New Task</label>
       <input
          type="text"
          name="item"
          id="item"
          value={props.newItem}
          onChange={props.handleChanges}
       />
       <button>Add Task!</button>
     </form>
    </div>
  )
}

export default TodoForm;

