import React, { useReducer, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/reducer';
import './Todo.css';



function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  //useReducer is like a custom hook of useState
  //const state will = initialState
  //dispatch (kind of like setNewItem) is reducer functions
  //reducer functions are like mini setStates
  const [ newItem, setNewItem ] = useState();

  const [ day, setDay ] = React.useState('day')

  React.useEffect(() => {
    const days = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'
    setDay(days.split(' ')[new Date().getDay()])
  }, [])
  
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log('it worked');
    dispatch({ type: 'ADD_TODO', payload: newItem }) 
  }

  const handleChanges = e => {
    setNewItem(e.target.value)
    console.log(e.target.value);
    
  };

  const toggleCompleted = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id })
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }


  return (
    <div className="container">
      <TodoForm 
        handleSubmit={handleSubmit} 
        handleChanges={handleChanges} 
        newItem={newItem}
      />
      <TodoList 
        state={state} 
        toggleCompleted={toggleCompleted}
        clearCompleted={clearCompleted}
      />
      <div>
        Get your sh*t done and have a great {day}
      </div>
    </div>
  );
}

export default App;
