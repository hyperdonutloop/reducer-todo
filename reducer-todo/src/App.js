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
  

  const [ day, setDay ] = React.useState('day')
  

  React.useEffect(() => {
    const days = 'Sunday Monday Tuesday Wednesday Thursday Friday🏄🏻‍♂️ Saturday'
    setDay(days.split(' ')[new Date().getDay()])
  }, [])

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
          Have a productive {day}
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
