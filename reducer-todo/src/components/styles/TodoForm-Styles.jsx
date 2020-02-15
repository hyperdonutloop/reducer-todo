import styled from 'styled-components';

export const Wrapper = styled.div`
  .tasks {
    padding: 1rem;
  }

  .todo-input {
    background-color: #383B40;
    color: inherit;
    height: 2rem;
    width: 10rem;
    outline: none;
    border: 0px;
    margin: 1rem;
    border-radius:2em;
    text-align: center;
  }

  .circle-btn {
    border-radius:2em;
    outline-color: transparent;
    outline-style: none;
    padding:0.3em 1.2em;
    text-align: center;
    margin-right: 0.8rem;
    background-color: #FFFFFF;
  }

  .remove-btn {
    border-radius:2em;
    outline-color: transparent;
    outline-style: none;
    padding:0.3em 1.2em;
    text-align: center;
    background-color: #FFFFFF;
    
  }

  .bouncy {
    animation: bouncy 5s infinite linear;
    position: relative;

    @keyframes bouncy {
      0%{top: 0em}
      40%{top: 0em}
      43%{top:-0.9em}
      46%{top:0em}
      48%{top:-0.4em}
      50%{top:0em}
      100%{top:0em}
    }

  }

  

`;