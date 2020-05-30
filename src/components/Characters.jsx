import React from 'react';
import '../css/characters.css';
import { Link } from 'react-router-dom';

export default function Characters(props) {
  return (
    <div className="characters">
      
      {props.charactersArray && props.charactersArray.map(character => (
        <Link to={`/character/${character.name}`}>
          <div className="character">
            <img src={character.image} alt="" />
            <h3>{character.name}</h3>
          </div>
        </Link>
      ))}
      <button onClick={props.getCharacters}>Get More Characters</button>
    </div>
  )
}
