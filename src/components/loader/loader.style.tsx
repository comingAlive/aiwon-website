import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;


export const LoaderContainer = styled.div`
  height: 90vh;
  padding: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  animation: ${fadeInOut} ease 3s 1;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderDiv = styled.div`
  align-content: center;
  justify-content: center;
  display: flex;
  position: relative;
  width: 300px;
  height: 300px;
  border: 4px solid #d0d8e5;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.1),
    10px 10px 10px rgba(0, 0, 0, 0.4),
    inset -5px -5px 5px rgba(255, 255, 255, 0.2),
    inset 10px 10px 10px rgba(0, 0, 0, 0.4);
  padding: 0;
  margin: 0;
  line-height: 20px;
  color: white;
  font-weight: bold;
  font-size: 2em;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    top: 25px;
    bottom: 25px;
    right: 25px;
    left: 25px;
    z-index: 10;
    background: #d6dbe3;
    border-radius: 50%;
    border: 2px solid #c7cede;
    box-shadow: inset -5px -5px 5px rgba(255, 255, 255, 0.2),
      inset 10px 10px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const LoaderSpan = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: -1;
  background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  filter: blur(50px);
  animation: ${rotate} 0.5s linear infinite;
`;
