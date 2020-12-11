import React from 'react'
import styled from 'styled-components';

function Character(props) {
  const { character } = props;

  const StyledCharacter = styled.div ` 
  display:flex;
  flex-flow:column nowrap;
  align-items:center;
  justify-content: space-around;
  font-size: 2rem;
  border: 2px solid green;
  width: 250px;
  min-height: 200px;
  padding: 5px 0;
  margin: 10px 0;
  background: rgba(229, 219, 76, .85);
  border-radius: 15px;

  .avatar {
    width: 240px;
    border-radius: 15px;
    border: 1px black solid;
    border: 
  }
  
  `

  return (
    <StyledCharacter>
      <img className="avatar"
      src={character.image}
      alt="Character"
      />
      <h3>{character.name}</h3>
      <h4>{character.species}</h4>
      <h4>{character.status}</h4>
    </StyledCharacter>
  )
}

export default Character

