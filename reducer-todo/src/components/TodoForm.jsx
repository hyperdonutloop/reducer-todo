import React from 'react';
import { Wrapper } from './styles/TodoForm-Styles.jsx';

const TodoForm = (props) => {

  return (
    <Wrapper>
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
          <button className="button">Add Task!</button>
        </form>
      </div>
    </Wrapper>
    
  )
}

export default TodoForm;

