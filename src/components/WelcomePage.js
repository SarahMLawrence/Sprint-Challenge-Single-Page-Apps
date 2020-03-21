import React from "react";

import Navigation from './Navigation';
import CharacterList from './CharacterList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <Navigation />
      <Route exact path="/characterlist" component={CharacterList} />

    </section>
  );
}
