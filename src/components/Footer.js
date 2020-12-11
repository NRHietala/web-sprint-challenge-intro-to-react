import React from 'react'
import styled from 'styled-components';

function Footer() {

  const StyledFooter = styled.footer `
  text-align:center;
  font-size: 3rem;
  
  `
  return (
    <StyledFooter>
      <h3>Thanks for Stopping By!</h3>
    </StyledFooter>
  )
}

export default Footer
