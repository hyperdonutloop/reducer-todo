import React from "react";

import  { Wrapper }  from './styles/Todo-Styles.jsx';

const Todo = props => {
  return (
    <Wrapper>
      <div className="todos">
        <div
          className={props.completed ? 'completed' : 'not-completed'}>
          <p 
            className="todo" 
            onClick={() => props.dispatch({ 
              type: 'TOGGLE_TODO', 
              payload: props.id
            })
            }>{props.item}
          </p>
        </div>
      </div>
      
    </Wrapper>
  )
}

export default Todo;