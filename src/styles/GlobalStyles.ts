
import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: #111;

  }

  *, bottom, input {
    border: 0;
    background: none;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    transition: color .3s ease-out;
  }

  ul {
    list-style: none;
  }

`;
