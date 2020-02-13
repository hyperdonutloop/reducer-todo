import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  
  return (
    
    <ul className="todo-list">
      {props.state.map(item => (
        <Todo
        key={item.id}
        item={item}
        toggleCompleted={props.toggleCompleted}
        />
      ))}
      <div className="button">
        <button 
          className="clear-btn" onClick={props.clearCompleted}>Clear Completed Tasks 
          &nbsp; 
          <span role="img" aria-label="celebration">🎉</span>
        </button>
      </div>
    </ul>
  )
}

export default TodoList;