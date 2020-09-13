
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
    color: var(--color-primary);
    transition: color .3s ease-out;
  }

  ul {
    list-style: none;
  }

  :root {
    --color-primary: #ffffff;
    --color-black: #000000;
    --color-red: #DB202C;
    --color-grey-text: #999999;
    --color-green-text: #46d369;
    --color-background: #111111;
    --color-white-button: #ffffff;
    --color-grey-button : #333333;
    --color-header:#141414;
  }

`;
