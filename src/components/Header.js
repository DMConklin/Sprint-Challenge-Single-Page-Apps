import React from "react";
import { StyledH1, StyledH1Span, StyledNavUl, StyledLink } from './style';

export default function Header() {
  return (
    <header className="ui centered">
      <StyledH1 className="ui center">Rick <StyledH1Span>and</StyledH1Span> Morty<br />Fan Page</StyledH1>
      <StyledNavUl>
        <li><StyledLink to="/">Home</StyledLink></li>
        <li><StyledLink to="/characters">Characters</StyledLink></li>
      </StyledNavUl>
    </header>
  );
}
