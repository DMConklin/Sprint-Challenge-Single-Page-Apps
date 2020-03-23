import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import axios from 'axios';
import { StyledCharacterListSection, StyledNoListDiv } from './style';

export default function CharacterList(props) {
  const [characterData, setCharacterData] = useState([]);

  const [url, setUrl] = useState('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/');

  useEffect(() => {
    axios.get(url)
    .then(response => console.log(setCharacterData(response.data.results)))
    .catch(err => setCharacterData(false));
  }, [url]);

  const urlSetter = (name) => {
    setUrl(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${name}`)
  }

  return (
    <>
    <SearchForm url={urlSetter} />
    <StyledCharacterListSection className="character-list">
      {console.log(characterData)}
      {characterData === false ? <StyledNoListDiv><img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick"/><br /><h2>Yeah I don't think so genius.</h2></StyledNoListDiv> : characterData.map(character => {
        return <CharacterCard character={character} key={character.id} />
      })}
    </StyledCharacterListSection>
    </>
  );
}
