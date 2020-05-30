import React from 'react';
import {withRouter} from 'react-router-dom'

function CharacterDetails(props) {
  const characterName = props.match.params.characterName
  const selectedCharacter = props.charactersArray.find(character => {
    return character.name===characterName
  })
  console.log(selectedCharacter)
  return (
    <div className='selectedCharacter'>
      <h1>{selectedCharacter.name}</h1>
      <img src={selectedCharacter.image} alt="" />
      <p>Status: {selectedCharacter.status}</p>
    </div>
  )
}

export default withRouter(CharacterDetails)