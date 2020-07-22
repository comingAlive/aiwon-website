import styled from "styled-components";

export const ButtonStyled = styled.a<{ isLocked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 66px;
  background: #f1f3f6;
  border-radius: 20px;
  box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
    inset 0 0 20px rgba(255, 255, 255, 0), 7px 7px 15px rgba(55, 84, 170, 0.15),
    -7px -7px 20px white, inset 0 0 4px rgba(255, 255, 255, 0.2);
  transition: box-shadow 399ms ease-in-out;
  margin: 5px;

  ${(props) =>
    props.isLocked
      ? ""
      : "&:hover { box-shadow: inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px white, 0 0 4px rgba(255, 255, 255, 0.2); }"}
`;
