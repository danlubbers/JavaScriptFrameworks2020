// import useEffect
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  /**
   * Set up state and make AJAX requests here
   */

  const [allCharacters, setAllCharacters] = useState({});
  const [characterId, setCharacterId] = useState(1);
  const [characterInfo, setCharacterInfo] = useState({});

  useEffect(() => {
    ( async() => {

      try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/`);
        // console.log(res.data.results[5].name);
        setAllCharacters(res.data.results);

        const getCharacter = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
        // console.log(singleCharacter.data);
        setCharacterInfo(getCharacter.data);
        
      } catch(err) {
        console.error(err);
      }
    }
    )();
  }, [characterId])

  // console.log(characterId)
  
  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{characterId === 1 ? 'Pick a Character' : characterInfo.name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            <img
              alt={characterId === 1 ? 'Pick a Character' : characterInfo.name}
              src={characterId === 1 ? 'https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg' : characterInfo.image}
              height="250"
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" type="text" onChange={e => setCharacterId(e.target.value)}>
              {/**
               * Loop through all characters. The value should be the character id.
               * @example in HTML
               * <option value="2" key="character-1">Morty Smith</option>
               */}
               <option></option>
               {Object.values(allCharacters).map((character, idx) => {
                 return (
                  <option key={`Character-list ${idx}`} value={character.id}>{character.name}</option>
                 )
               })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
