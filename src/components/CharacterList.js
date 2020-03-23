import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import { SearchForm, NoCharacters } from './index';
import axios from 'axios';
import { StyledCharacterListSection } from './style';

export default function CharacterList(props) {
  const [characterData, setCharacterData] = useState([]);
  const [url, setUrl] = useState(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`);

  useEffect(() => {
    axios.get(url)
    .then(response => setCharacterData(response.data.results))
    .catch(err => setCharacterData(false));
  }, [url]);

  const urlSetter = (query) => {
    setUrl(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/${query}`)
  }

  return (
    <>
    <SearchForm url={urlSetter} />
    <StyledCharacterListSection className="character-list">
      {console.log(characterData)}
      {characterData === false ? <NoCharacters /> : characterData.map(character => {
        return <CharacterCard character={character} key={character.id} />
      })}
    </StyledCharacterListSection>
    </>
  );
}
