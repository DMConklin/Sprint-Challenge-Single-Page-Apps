import React from "react";
import { Route} from 'react-router-dom';
import { Header, WelcomePage, CharacterList } from './components';
import { StyledAppMain} from './components/style';

export default function App() {

  return (
    <StyledAppMain data-testid='app'>
      <Header />
      
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/search" />
    </StyledAppMain>
  );
}
