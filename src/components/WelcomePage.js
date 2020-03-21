import React from "react";


import CharacterList from './CharacterList';
import LocationsList from './LocationsList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <nav>
        <h1 className="welcome-header">Welcome to the ultimate fan site!</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/character-list">Characters</Link>
          <Link to="/locations-list">Locations</Link>
        </div>
      </nav>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/character-list" component={CharacterList} />
      <Route exact path="/location-list" component={LocationsList} />
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>



    </section>
  );
}
