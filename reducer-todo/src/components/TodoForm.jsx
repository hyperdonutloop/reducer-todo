import React, { useState } from 'react';
import { Wrapper } from './styles/TodoForm-Styles.jsx';

const TodoForm = ({ dispatch }) => {
  const [ todo, setTodo ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todo });
    setTodo('');
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }


  return (
    <Wrapper>
      <div className="tasks">
        <form onSubmit={handleSubmit}>
          <label htmlFor="item">New Task</label>
          <input
              type="text"
              placeholder="enter things here"
              name="todo"
              id="item"
              value={todo}
              onChange={e => setTodo(e.target.value)}
              // ref="items"
          />
          <button className="button" type="submit">Add Task!</button>
          <button className="clear-btn" onClick={handleClear}>Clear Completed</button>
        </form>
      </div>
    </Wrapper>
    
  )
}

export default TodoForm;

