import styled from 'styled-components';

export const Wrapper = styled.div`
  img {
    margin: auto;
    max-width: 300px;
    /* border: 2px dashed green; */

    @media only screen and (max-width: 400px) {
      max-width: 250px;
    }
  }

  h1 {
    margin-bottom: 0.6rem;
  }

  .react {
    margin-top: 0.4rem;
    color: #CE9ECE;
  }

  .reactword {
    color: #FFFFFF;
  }

  .things {
    margin-top: 0.7rem;
    /* border: 2px dashed green; */
  }


`;

