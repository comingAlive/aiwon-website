import { InputStyled } from "./input.style";
import React, { useContext } from "react";
import {AuthContext} from "../../contexts/auth/auth.context";

export const Input = () => {

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    authDispatch({ type: "CHANGE_FORM_INPUT", payload: event.target.value });
  };

  const {
    authState: { formInput, isLocked, isSecured },
    authDispatch,
  } = useContext(AuthContext);

  const onClickHandler = () => {
    authDispatch({ type: "SECURE_ON" });
  };

  return (
    <InputStyled
      disabled={isLocked}
      isSecured={isSecured}
      isLocked={isLocked}
      onClick={!isLocked ? onClickHandler : null}
      onKeyPress={() => {}}
      onChange={inputHandler}
      onMouseOver={
        !isLocked ? () => authDispatch({ type: "INPUT_HOVER_ON" }) : null
      }
      onMouseOut={() => () => authDispatch({ type: "INPUT_HOVER_OFF" })}
      maxLength={5}
      value={formInput}
      placeholder={"Ограниченный вход"}
    />
  );
};
