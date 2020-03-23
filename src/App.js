import React from "react";
import { Route} from 'react-router-dom';
import { Header, WelcomePage, CharacterList } from './components';

export default function App() {

  return (
    <main data-testid='app'>
      <Header />
      
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/search" />
    </main>
  );
}
