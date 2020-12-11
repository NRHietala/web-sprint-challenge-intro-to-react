import React from 'react'
import styled from 'styled-components';

function Character(props) {
  const { character } = props;

  return (
    <div>
      {/* <img src={character.url} alt="Character"/> */}
      <h3>{character.name}</h3>
      <h4>{character.species}</h4>
      <h4>{character.status}</h4>
    </div>
  )
}

export default Character

