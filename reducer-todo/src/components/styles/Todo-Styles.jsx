import styled from 'styled-components';

export const Wrapper  = styled.div`
  .todos {
    /* border: 2px dashed greenyellow; */
    list-style-type: none;
    background-color: #27292D;
    padding: 0.9rem;
    /* padding-inline-start: 0; */
    /* margin-block-start: 1em; */
    margin: 4px;

    .item {
      color: #FFFFFF;
    }

    &:hover {
      background-color: #383B40;
      /* box-shadow: 0 0 3px #ccc; */
    }

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
  .itemcompleted {
    color: #35A0DA;
    text-decoration: line-through; 
  }

`;