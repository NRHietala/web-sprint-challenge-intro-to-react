import React from 'react'
import styled from 'styled-components';
import Character from './Character';

function Gallery(props) {
  const { characters } = props;

  return (
    <div className="gallery">
      {
      characters.map(toon => (
        <Character
        key={toon.id}
        character={toon}
        />
      ))}   
    </div>
  )
}

export default Gallery
