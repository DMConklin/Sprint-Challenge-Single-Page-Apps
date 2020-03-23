import React from "react";
import { StyledCharacterCardDiv, StyledCharacterCardImg, StyledCharacterCardUl, StyledCardInfoDiv, StyledCardInfoH2 } from './style'

export default function CharacterCard(props) {
  return(
    <StyledCharacterCardDiv>
      <StyledCharacterCardImg src={props.character.image} alt="portrait" />
        <StyledCardInfoDiv>
          <StyledCardInfoH2>{props.character.name}</StyledCardInfoH2>
          <StyledCharacterCardUl>
            <li>Status: {props.character.status}</li>
            <li>Species: {props.character.species}</li>
            <li>Gender: {props.character.gender}</li>
            <li>Origin: {props.character.origin.name}</li>
          </StyledCharacterCardUl>
        </StyledCardInfoDiv>
    </StyledCharacterCardDiv>
  )
}
