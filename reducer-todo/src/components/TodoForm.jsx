import React from 'react';

const TodoForm = () => {

  return (
    <div className="tasks">
     <form>
       <label htmlFor="item">New Task</label>
       <input
        type="text"
        name="item"
        id="item"
       />
       <button>Add Task!</button>
     </form>
    </div>
  )
}

export default TodoForm;

