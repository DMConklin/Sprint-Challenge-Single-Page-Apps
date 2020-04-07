import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import { SearchForm, NoCharacters, Pagination } from './index';
import axios from 'axios';
import { StyledCharacterListSection } from './style';

export default function CharacterList() {
  const [characterData, setCharacterData] = useState({results: [], info: {}});
  const [url, setUrl] = useState(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`);

  useEffect(() => {
    axios.get(url)
    .then(response => setCharacterData(response.data))
    .catch(err => setCharacterData(false));
  }, [url]);

  const urlSetter = (url) => {
    setUrl(url)
  }

  return (
    <>
    <SearchForm urlSetter={urlSetter} />
    {!characterData ? null : <Pagination info={characterData.info} urlSetter={urlSetter} url={url} />}
    <StyledCharacterListSection className="character-list">
      {!characterData ? <NoCharacters /> : characterData.results.map(character => {
        return <CharacterCard character={character} key={character.id} />
      })}
    </StyledCharacterListSection>
    {!characterData ? null : <Pagination info={characterData.info} urlSetter={urlSetter} url={url} />}
    </>
  );
}
