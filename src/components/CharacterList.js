import React, { useEffect, useState } from "react";
import Axios from "axios";

import CharacterCard from './CharacterCard';
//import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const newChar = response.data.results;
        console.log(newChar);
        setCharacter(newChar);
      })
      .catch(error => console.log(`The error is: ${error}`));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
 
    <div className="character-list">
     {/*<SearchForm />*/}
      {character.map(char => {
        return (
          <CharacterCard
          key={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          type={char.type}
          gender={char.gender}

          />
        );
      })}

    </div>
  );
};
