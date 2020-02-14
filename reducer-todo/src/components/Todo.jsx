import React from "react";
import styled from 'styled-components';

// import  { Wrapper }  from './styles/Todo-Styles.jsx';

const Wrapper = styled.div`
  .completed {
  color: #35A0DA;
  text-decoration: line-through; 
}

 &:hover .todos {
   background-color: #383B40;
   


 }

 .todos {
   background-color: #27292d;
   /* transition: background-color 0.2s; */
   /* display: flex; */
   /* text-align: center; */
   padding: 0.9rem;
   margin: 4px;
  

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &:not(:last-child) {
      border-bottom: 2px solid #1F2023;
    }


  }

 
`;

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