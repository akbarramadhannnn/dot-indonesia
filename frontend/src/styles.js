import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
      margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background: #e5e4e2 !important;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }
`;

export default GlobalStyle;
