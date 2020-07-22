import styled, { css, keyframes } from "styled-components";


const colorize = keyframes`
  10% {
    color: #9dabc0;
  }

  20% {
    color: #c09d9d;
  }

  30% {
    color: #c28b8b;
  }

  40% {
    color: #bb7373;
  }
  50% {
    color: #c17676;
  }
  60% {
    color: #bf7878;
  }
  70% {
    color: #bf7878;
  }
  80% {
    color: #c28b8b;
  }
  90% {
    color: #c09d9d;
  }
  100% {
    color: #9dabc0;
  }
`;

type Props = {
  isSecured: boolean;
  isLocked: boolean;
};


export const InputStyled = styled.input<Props>`
  font-family: "Main Regular", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 660px;
  height: 66px;
  background: #f1f3f6;
  border-radius: 20px;
  box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
    inset 0 0 20px rgba(255, 255, 255, 0), 7px 7px 15px rgba(55, 84, 170, 0.15),
    -7px -7px 20px white, inset 0 0 4px rgba(255, 255, 255, 0.2);
  transition: box-shadow 399ms ease-in-out;
  resize: none;
  border: none;
  overflow: auto;
  outline: none;
  margin: 5px;
  align-content: center;
  text-align: center;
  color: #9dabc0;
  font-size: 30px;

  ${(props) =>
    props.isLocked
      ? css`
          animation: ${colorize} 0.5s 1;
        `
      : css`
          &:hover {
            box-shadow: inset 7px 7px 15px rgba(55, 84, 170, 0.15),
              inset -7px -7px 20px white, 0 0 4px rgba(255, 255, 255, 0.2);
          }
        `}

  ${(props) =>
    props.isSecured
      ? css`
          -webkit-text-security: disc;
        `
      : ""}
`;
