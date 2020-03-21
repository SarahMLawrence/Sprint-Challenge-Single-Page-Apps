// import React, { useState, useEffect } from "react";

// import Axios from "axios";

// import CharacterCard from './CharacterCard';

// export default function SearchForm() {
//   const [search, setSearch] = useState('');
//   const [results, setResults] = useState([]);

//   // useEffect(() => {
//   //   Axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
//   //     .then(res => {
//   //       console.log(res.data.results)
//   //       const characters = res.data.results.filter(char =>
//   //         char.name.toLowerCase().includes(search.toLowerCase())
//   //       );
//   //       setResults(characters);
//   //     })
//   //     .catch(err => {
//   //       console.log('No data', err);
//   //     })
//   // }, [search]);


//   const handleChange = e => {
//     console.log(e.target.value)
//     setSearch(e.target.value);
//   };

//   return (
//     <section className="search-form">
//       <form>
//         <label htmlFor='name'> Search for Character: </label>
//         <input
//           id='name'
//           type='text'
//           name='textfield'
//           value={search}
//           placeholder='Enter character name'
//           onChange={handleChange}
//         />
//       </form>
//       <div className='character-list'>
//         <ul>

//           {results.map((char, index) => {
//             return <CharacterCard
//               key={index}
//               name={char.name}
//               image={char.image}
//               species={char.species}
//               gender={char.gender}
//               status={char.status}
//             />
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// }