import React, { useReducer } from 'react';
import './App.css';

//components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header.jsx';
import { reducer, initialState } from './reducers/reducer';

import { Wrapper } from './components/styles/App-Styles.jsx';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  //useReducer is like a custom hook of useState
  //const state will = initialState
  //dispatch (kind of like setNewItem) is reducer functions
  //reducer functions are like mini setStates
  
  const date = new Date();
  const weekday = new Array(7);
  weekday[0] = "It's Sunday, relax 🏖";
  weekday[1] = "Get motivated, it's Monday ☕️";
  weekday[2] = "Tuesday's not so bad 🌮";
  weekday[3] = "You made it to Wednesday 🐪";
  weekday[4] = "Thursday is Friday-eve 🎄";
  weekday[5] = "Happy Friday 🙌🏼";
  weekday[6] = "It's Saturday, go have fun 🏄🏻‍♂️";
    
  const today = weekday[date.getDay()];
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
