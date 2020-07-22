import { Dispatch } from "react";

type ActionType =
  | { type: "CHANGE_FORM_INPUT"; payload: string }
  | { type: "LOCK_ON" }
  | { type: "SECURE_ON" }
  | { type: "SECURE_OFF" }
  | { type: "BUTTON_HOVER_ON" }
  | { type: "BUTTON_HOVER_OFF" }
  | { type: "INPUT_HOVER_ON" }
  | { type: "INPUT_HOVER_OFF" }
  | { type: "TOGGLE_DRAWER" };

type StateType = {
  buttonHovered: boolean;
  inputHovered: boolean;
  formInput: string;
  isLocked: boolean;
  isSecured: boolean;
}

type AuthContextType = {
  authState?: StateType;
  authDispatch?: Dispatch<ActionType>;
};
