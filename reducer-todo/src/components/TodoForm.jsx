import React, { useState } from 'react';
import { Wrapper } from './styles/TodoForm-Styles.jsx';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
              // ref="items"
          />
          {/* <AddCircleIcon style={{color: "#FFFFFF"}} className={classes.root}> */}
            <button
              // style={{ backgroundColor: "#383B40"}}
              // variant="outlined"
              
              className="circle-btn bouncy" 
              type="submit" 
              onClick={handleSubmit}>Add
            </button>
          {/* </AddCircleIcon> */}

          {/* <Button className={classes.root} style={{ backgroundColor: "#383B40"}} size="small" variant="outlined"> */}
            <button
              style={{animationDelay: "0.07s"}}
              className="remove-btn bouncy" 
              onClick={handleClear}>Remove
            </button>
          {/* </Button> */}
        
      </div>
    </Wrapper>
    
  )
}

export default TodoForm;

