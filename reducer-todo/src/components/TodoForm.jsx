import React, { useState } from 'react';
import { Wrapper } from './styles/TodoForm-Styles.jsx';

//material ui
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';

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
        {/* <form onSubmit={handleSubmit}> */}
          {/* <label htmlFor="item">New Task</label> */}
          <input
              className="todo-input"
              type="text"
              placeholder="what do ya wanna do"
              name="todo"
              id="item"
              value={todo}
              onChange={e => setTodo(e.target.value)}
              // ref="items"
          />
          <Button size="small" variant="contained">
          <AddIcon
            className="button" 
            type="submit" 
            onClick={handleSubmit}>
          </AddIcon>
          </Button>
          <Button size="small" variant="contained">
            <CloseSharpIcon className="clear-btn" onClick={handleClear}></CloseSharpIcon>
          </Button>
        {/* </form> */}
      </div>
    </Wrapper>
    
  )
}

export default TodoForm;

