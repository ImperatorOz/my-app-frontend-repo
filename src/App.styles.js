// src/App.styles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f8ff;
    font-family: Arial, sans-serif;
    margin: 0; /* Remove default margin from body */
    padding: 0; /* Remove default padding from body */
  }
`;

export default GlobalStyle;