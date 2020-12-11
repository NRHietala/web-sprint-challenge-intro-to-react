import React from 'react'
import styled from 'styled-components';

function Footer() {

  const StyledFooter = styled.footer `
  text-align:center;
  font-size: 3rem;

   h3 {
    font-family: 'Bigelow Rules', cursive;
    color: #01b4c6;
    text-shadow: 2px 3px #97ce4c;
    font-size: 5rem;
  }
  
  `
  return (
    <StyledFooter>
      <h3>Thanks for Stopping By!</h3>
    </StyledFooter>
  )
}

export default Footer
