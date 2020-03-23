import React from 'react';
import { StyledNoListDiv } from './style';

const NoCharacters = () => {
    return(
        <StyledNoListDiv><img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick"/><br /><h2>Yeah I don't think so genius.</h2></StyledNoListDiv>
    )
}

export default NoCharacters;