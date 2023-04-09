import React from "react";
import { StyledHeader } from "./styles/Header.styled";

const FavouritesHeading = (props) => {
  return (
    <StyledHeader>
      <h1 style={{ color: "#fff" }}>{props.header}</h1>
    </StyledHeader>
  );
};

export default FavouritesHeading;
