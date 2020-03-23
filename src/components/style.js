import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';

// App Styles

export const StyledAppMain = styled.main`
    background-color: black;
    box-shadow: 0px 0px 5px 5px #7ab363;
    padding: 50px;
`;

// Header Styles

export const StyledH1 = styled.h1`
    font-family: 'Get Schwitchy';
    font-size: 64px;
    color: #1f9ace;
    text-shadow: 1px 1px 5px #7ab363, -1px -1px 5px #7ab363;
`;

export const StyledH1Span = styled.span`
    font-size: 32px;
`;

export const StyledNavUl = styled.ul`
    list-style: none;
    width: 25%;
    display: flex;
    justify-content: space-around;
    margin: 50px auto;
`;

export const StyledLink = styled(Link)`
    margin-right: 25px;
    text-decoration: none;
    color: #1f9ace;
    &:hover {
        color: #7ab363;
    }
`;

// WelcomePage Styles

export const StyledWelcomeHeader = styled.div`
    text-align: center;
`;

// SearchForm Styles

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 0 auto;
`;

export const StyledField = styled(Field)`
    margin: 0;
`;

export const StyledSubmitInput = styled.input`
    border: 1px solid transparent;
    margin: 0
`;

// CharacterList Styles

export const StyledCharacterListSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

// CharacterCard Styles

export const StyledCharacterCardDiv = styled.div`
    box-shadow: 0px 0px 5px 5px #7ab363;
    width: 30%;
    margin 25px 0;
`;

export const StyledCharacterCardImg = styled.img`
    width: 100%
`;

export const StyledCardInfoH2 = styled.h2`

`;

export const StyledCharacterCardUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const StyledCardInfoDiv = styled.div`
    padding: 10px;
`;