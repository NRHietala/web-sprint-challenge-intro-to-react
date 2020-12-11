import React from 'react'
import styled from 'styled-components';

function Header() {

  const StyledHeader = styled.header `
  
  .header {
    display:flex;
    justify-content:center;
  }

  h1 {
    text-align:center;
    font-size: 10rem;
    color: #01b4c6;
    text-shadow: 2px 3px #97ce4c;
    
  }
  `

  return (
    <StyledHeader className="header">
      <h1>Rick and Morty</h1>
      <h1>Cast</h1>
    </StyledHeader>
  )
}

export default Header
