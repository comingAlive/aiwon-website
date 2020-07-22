import {ActionType, StateType} from "../../types/auth";

export function authReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "CHANGE_FORM_INPUT":
      return {
        ...state,
        formInput: action.payload,
      };
    case "LOCK_ON":
      return {
        ...state,
        isLocked: true,
      };
    case "SECURE_ON":
      return {
        ...state,
        isSecured: true,
      };
    case "SECURE_OFF":
      return {
        ...state,
        isSecured: false,
      };
    case "BUTTON_HOVER_ON":
      return {
        ...state,
        buttonHovered: true,
      };
    case "BUTTON_HOVER_OFF":
      return {
        ...state,
        buttonHovered: false,
      };
    case "INPUT_HOVER_ON":
      return {
        ...state,
        inputHovered: true,
      };
    case "INPUT_HOVER_OFF":
      return {
        ...state,
        inputHovered: false,
      };

    default: {
      throw new Error(`Unsupported action type at App Reducer`);
    }
  }
}
