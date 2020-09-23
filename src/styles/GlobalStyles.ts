
import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
    overflow-y: overlay;
    min-height: 100%;
  }

  body {
    min-height: 100%;
    background: #111;
    --webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar {
    width: 10px;
    z-index: 3;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-red);

  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-track-piece {
    background: transparent none;

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
    --color-white-button: #f1f1f1;
    --color-grey-button : #333333;
    --color-header:#141414;
  }
`;
