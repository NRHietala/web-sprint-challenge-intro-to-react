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
  border: 4px solid rgba(76, 229, 219, .75);
  width: 250px;
  min-height: 300px;
  padding: 5px 0;
  margin: 10px 0;
  background: rgba(229, 219, 76, 1);
  border-radius: 15px;

  .avatar {
    width: 240px;
    border-radius: 15px;
    border: 1px black solid; 
  }

  h3 {
    padding: 3px 0;
    color:#f675da;
    text-align:center;
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

