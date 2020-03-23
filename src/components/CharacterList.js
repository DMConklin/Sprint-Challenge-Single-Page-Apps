import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList(props) {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(response => console.log(setCharacterData(response.data.results)))
    .catch(err => console.log(err));
  }, []);

  return (
    <section className="character-list">
      {console.log(characterData)}
      {characterData.map(character => {
        return <CharacterCard character={character} />
      })}
    </section>
  );
}
