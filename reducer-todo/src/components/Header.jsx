import React from 'react';
import logo from '../logo.svg';

import { Wrapper } from './styles/Header-Styles.jsx';


const Header = () => {

  return (
    <Wrapper>
      <header>
        <img src={logo} alt="react" />
        <h1 className="things">things <span role="img" aria-label="bolt">⚡️</span></h1>
        <p className="react">don't overreact, get things done</p>
      </header>
    </Wrapper>
    
  )
  
}

export default Header;