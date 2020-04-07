import React from "react";
import { StyledWelcomeHeader } from './style';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <StyledWelcomeHeader>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <h2>Yeah, yeah, welcome ...</h2>
      </StyledWelcomeHeader>
    </section>
  );
}
