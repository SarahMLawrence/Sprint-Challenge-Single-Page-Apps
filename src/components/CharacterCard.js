import React from "react";

const CharacterCard = props => {
  return (
    <>

      <div key={props.id}>

        <ul>
          <h2>Name: {props.name}</h2>
          <h2>Status: {props.status}</h2>
          <h2>Species: {props.species}</h2>
          <h2>Type:  {props.type}</h2>
          <h2>Gender:   {props.gender}</h2>
        </ul>
      </div>

    </>
  );
};

export default CharacterCard;