import React, { useReducer, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header.jsx';
import { reducer, initialState } from './reducers/reducer';
import './Todo.css';



function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  //useReducer is like a custom hook of useState
  //const state will = initialState
  //dispatch (kind of like setNewItem) is reducer functions
  //reducer functions are like mini setStates
  

  const [ day, setDay ] = React.useState('day')
  

  React.useEffect(() => {
    const days = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'
    setDay(days.split(' ')[new Date().getDay()])
  }, [])

  return (
    
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
        Get your sh*t done and have a great {day}
      </div>
    </div>
  );
}

export default App;
