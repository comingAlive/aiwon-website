import {FormStyled} from "./form.style";
import React, {useContext} from "react";
import { AuthContext } from "contexts/auth/auth.context";

export const Form = ({children, submit}) => {
  const {
    authState: {isLocked},
  } = useContext(AuthContext);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <FormStyled
      isLocked={isLocked}
      onKeyDown={(e) => (e.key === "Enter" ? submit() : null)}
      onSubmit={submitHandler}
    >
      {children}
    </FormStyled>
  );
};
