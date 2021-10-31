import { userActionTypes } from "./user-action-types";

export const singInStart = () => ({ type: userActionTypes.SIGN_IN_START })
export const signInSuccess = payload => ({ type: userActionTypes.SIGN_IN_SUCCESS, payload })
export const signInError = payload => ({ type: userActionTypes.SIGN_IN_ERROR, error: payload })

export const signUpStart = () => ({ type: userActionTypes.SIGN_UP_START })
export const signUpSucces = payload => ({ type: userActionTypes.SIGN_UP_SUCCESS, payload })
export const signUpError = payload => ({ type: userActionTypes.SIGN_UP_ERROR, error: payload })

export const checKUserSeesionStart = () => ({ type: userActionTypes.CHECK_USER_SESSION_START })
export const checKUserSeesionSuccess = payload => ({ type: userActionTypes.CHECK_USER_SESSION_SUCCESS, payload })
export const checkUSerSessionError = payload => ({ type: userActionTypes.CHECK_USER_SESSION_ERROR, error: payload })
