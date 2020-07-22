import { LockIcon } from "../../assets/icons/LockIcon";
import { CheckIcon } from "../../assets/icons/CheckIcon";
import React, { useContext } from "react";
import { ButtonStyled } from "./button.style";
import { AuthContext } from "../../contexts/auth/auth.context";

export const Button = ({ submit }) => {
  const {
    authState: { isLocked },
    authDispatch,
  } = useContext(AuthContext);

  return (
    <ButtonStyled
      type={"submit"}
      isLocked={isLocked}
      onClick={submit}
      onMouseOver={
        !isLocked
          ? () =>
              authDispatch({
                type: "BUTTON_HOVER_ON",
              })
          : null
      }
      onMouseOut={() =>
        authDispatch({
          type: "BUTTON_HOVER_OFF",
        })
      }
    >
      {isLocked ? <LockIcon /> : <CheckIcon />}
    </ButtonStyled>
  );
};
