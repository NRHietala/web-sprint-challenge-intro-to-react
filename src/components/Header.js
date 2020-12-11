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
    padding: 20px;
    color: seagreen;
    text-shadow: 3px 3px gold;
    
  }
  `

  return (
    <StyledHeader className="header">
      <h1>Rick and Morty</h1>
    </StyledHeader>
  )
}

export default Header
