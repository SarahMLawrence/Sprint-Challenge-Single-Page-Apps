import React, { useEffect, useState } from "react";
import Axios from "axios";

import LocationCard from './LocationCard';

export default function LocationsList() {

  const [location, setLocation] = useState([]);

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        const newLocation = response.data.results;
        console.log(newLocation);
        setLocation(newLocation);
      })
      .catch(error => console.log(`The error is: ${error}`));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
 
    <div className="location-list">

      {location.map(loc => {
        return (
          <LocationCard
          key={loc.id}
          name={loc.name}
          type={loc.type}
          dimension={loc.dimension}
          residents={loc.residents}

          />
        );
      })}

    </div>
  );

    }