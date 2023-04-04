import React from "react";
import { StyledHeader } from "./styles/Header.styled";

const Header = (props) => {
  return (
    <StyledHeader>
      <h1 style={{ color: "#fff" }}>Movies</h1>
      <div className="nav">
        <input
          placeholder="Type To Search..."
          class="input"
          name="text"
          type="text"
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}      
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
