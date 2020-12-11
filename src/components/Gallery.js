import React from 'react'
import styled from 'styled-components';
import Character from './Character';

function Gallery(props) {
  const { characters } = props;

  const StyledGallery = styled.div `
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items:center;
    align-content: space-around;
  `

  return (
    <StyledGallery className="gallery">
      {
      characters.map(toon => (
        <Character
        key={toon.id}
        character={toon}
        />
      ))}   
    </StyledGallery>
  )
}

export default Gallery
