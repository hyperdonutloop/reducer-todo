import React from 'react';
import Todo from './Todo';

const TodoList = ({ state, dispatch }) => {
  const newItem = () => {
    return state.map(todo => <Todo {...todo} key={todo.id} dispatch={dispatch} />)
  };
  return (
    
    <div className="todo-list">
      {newItem()}
    </div>
  )
}

export default TodoList;