import { createGlobalStyle } from "styled-components";

import fontUrl from "../fonts/main.font.woff";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Main Regular";
    src: url(${fontUrl}) format('woff2');
  }

  html {
    font-family: "Main Regular", sans-serif;
    background: #f1f3f6;
  }

  body {
    display: grid;
    justify-content: center;
    align-content: center;
    height: 80%;
  }

  ::placeholder {
    color: #9dabc0;
  }


  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px 100px 100px 100px;
      height: 97vh;
    animation: fadeIn 2s ease;
  }



  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;

    }
  }

  .fadeOut {
  animation: fadeOut 3s ease;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      filter: blur(0);
    }

    100% {
      opacity: 0;
      filter: blur(1rem);
    }
  }
`;
