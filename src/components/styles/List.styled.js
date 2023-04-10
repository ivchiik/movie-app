import styled from "styled-components";

export const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;

  /* width */
  ::-webkit-scrollbar {
    width: 20px;
    scrollbar-width: thin;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(229, 9, 20);
    border-radius: 10px;
  }
`;

export const StyledMovie = styled.div`
  margin: 8px;

  img {
    width: 200px;
    height: 100%;
  }
`;
