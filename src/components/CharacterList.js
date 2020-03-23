import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import axios from 'axios';

export default function CharacterList(props) {
  const [characterData, setCharacterData] = useState([]);

  const [url, setUrl] = useState('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/');

  useEffect(() => {
    axios.get(url)
    .then(response => console.log(setCharacterData(response.data.results)))
    .catch(err => console.log(err));
  }, [url]);

  const urlSetter = (name) => {
    setUrl(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${name}`)
  }

  return (
    <section className="character-list">
      <SearchForm url={urlSetter} />
      {console.log(characterData)}
      {characterData.map(character => {
        return <CharacterCard character={character} key={character.id} />
      })}
    </section>
  );
}
