import React, { useReducer, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header.jsx';
import { reducer, initialState } from './reducers/reducer';
import './Todo.css';

import { Wrapper } from './components/styles/App-Styles.jsx';




function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  //useReducer is like a custom hook of useState
  //const state will = initialState
  //dispatch (kind of like setNewItem) is reducer functions
  //reducer functions are like mini setStates
  
  const date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Have an amazing FRIDAY 🎉";
    weekday[6] = "Saturday";
    
    var today = weekday[date.getDay()];
    console.log(today);

  return (
    <Wrapper>
      <div className="container">
        <Header />
        <TodoForm 
          dispatch={dispatch}
        />
        <TodoList 
          state={state} 
          dispatch={dispatch}
        />
        <div className="day">
          {today}
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
