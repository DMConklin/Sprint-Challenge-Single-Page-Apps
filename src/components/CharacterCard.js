import React from "react";

export default function CharacterCard(props) {
  return(
    <>
      <h2>{props.character.name}</h2>
      <ul>
        <li>Status: {props.character.status}</li>
        <li>Species: {props.character.species}</li>
        <li>Gender: {props.character.gender}</li>
        <li>Origin: {props.character.origin.name}</li>
      </ul>
      <img src={props.character.image} alt="portrait" />
    </>
  )
}
