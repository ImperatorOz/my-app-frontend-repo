import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 30px;
  background-color: #CDDEFF; /* Light Green header background */
  padding: 20px;
  border-radius: 8px;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Welcome to the Augustus Project</h1>
      <p>This is a DevOps assignment.</p>
      <p>Please take a moment to complete this short survey to help us improve.</p>
    </StyledHeader>
  );
}

export default Header;