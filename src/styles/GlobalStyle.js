import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    &::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        word-wrap: break-word;
    }

    html {
        margin: 0;
        font-size: 80%;
    }

    body {
        margin: 0;
        font-family: 'Helvetica', sans-serif
    }

    header {
        font-size: 1.5rem;
      }

      a {
        text-decoration: none;
      }
      img {
        display: block;
      }
      button,
      input, 
      textarea {
        border: none;
        outline: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
      }
      button {
        cursor: pointer;
      }
`;

export default GlobalStyle;
