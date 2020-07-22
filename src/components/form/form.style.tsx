import styled, { css } from "styled-components";

type Props = {
  isLocked: boolean;
};

export const FormStyled = styled.form<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px 100px 100px 100px;
  height: 97vh;
  animation: fadeIn 2s ease;

  ${(props) =>
    props.isLocked
      ? css`
          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
          transform: translate3d(0, 0, 0);
          perspective: 1000px;
        `
      : ""}
`;
