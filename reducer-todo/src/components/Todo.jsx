import React from "react";

import  { Wrapper }  from './styles/Todo-Styles.jsx';

const Todo = props => {
  return (
    <Wrapper>
      <ul className="todos">
        <li
          className={`item${props.item.completed ? 'completed' : ''}`}
          onClick={() => props.toggleCompleted(props.item.id)}>
          <p>{props.item.item}</p>
        </li>
      </ul>
      
    </Wrapper>
  )
}

export default Todo;