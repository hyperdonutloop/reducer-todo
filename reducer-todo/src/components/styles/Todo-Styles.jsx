import styled from 'styled-components';

export const Wrapper = styled.div`
  .completed {
    color: #35A0DA;
    text-decoration: line-through; 
  }

 &:hover .todos {
   background-color: #383B40;
  }

 .todos {
   background-color: #27292d;
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

