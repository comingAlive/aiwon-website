import React, { useReducer } from "react";
import { AuthContext } from "./auth.context";
import { authReducer } from "./auth.reducer";

export const authInitialState  = {
  formInput: "",
  isLocked: false,
  isSecured: false,
  buttonHovered: false,
  inputHovered: false,
};

export const AuthProvider: React.FC = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
