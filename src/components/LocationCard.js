import React from "react";

export default function LocationCard({ id, name, type, dimension, residents }) {
  return (
    <>
    <div key={id}>
      <ul>
        <h2>{name}</h2>
        <h2>{type}</h2>
        <h2>{dimension}</h2>
        <img src={residents.Array}/>
      </ul>
    </div>
    </>
  )
}
