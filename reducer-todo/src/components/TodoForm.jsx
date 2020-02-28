import React, { useState } from 'react';

import { Wrapper } from './styles/TodoForm-Styles.jsx';

const TodoForm = ({ dispatch }) => {
  const [ todo, setTodo ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (todo.length > 0 ) {
      dispatch({ type: 'ADD_TODO', payload: todo });
      setTodo('');
    } 
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <Wrapper>
      <div className="tasks">
          <input
            className="todo-input"
            type="text"
            placeholder=" add something!"
            name="todo"
            id="item"
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
          <button
            className="circle-btn bouncy" 
            type="submit" 
            onClick={handleSubmit}>Add
          </button>

          <button
            style={{animationDelay: "0.07s"}}
            className="remove-btn bouncy" 
            onClick={handleClear}>Remove
          </button>
      </div>
    </Wrapper>
    
  )
}

export default TodoForm;

