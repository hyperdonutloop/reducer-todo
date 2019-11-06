import React, { useReducer, useState } from 'react';
import { reducer, initialState } from '../reducers/reducer';

const TodoList = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const [ item, setItem ] = useState();
  console.log(state);
  
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
    </div>
  )
}

export default TodoList;