import React from "react";
import { StyledNavUl, StyledLink } from './style';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <StyledNavUl>
        <li><StyledLink to="/">Home</StyledLink></li>
        <li><StyledLink to="/characters">Characters</StyledLink></li>
      </StyledNavUl>
    </header>
  );
}
