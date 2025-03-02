import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Playfair Display", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.8;
    min-width: 375px;
  }

  a {
    text-decoration: unset;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg}
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg}
  }
  section:nth-last-of-type(2){
    background-color: ${theme.colors.secondaryBg}

  }

  input {
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    color: inherit;
  }
  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    
  }
  h1 span{
    color: ${theme.colors.font};
  }

`


