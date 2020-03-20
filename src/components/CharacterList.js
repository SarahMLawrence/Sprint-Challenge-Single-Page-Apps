import React, { useEffect, useState } from "react";
import Axios from "axios";

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    Axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const newChar = reponse.data.result;
        console.log(newChar);
        setChar(newChar);
      })
      .catch(error => console.log(`The error is: ${error}`));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {char.map(character => {
        return (
          <CharacterCard
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          type={character.type}
          gender={character.gender}

          />
        );
      })}

    </section>
  );
}
