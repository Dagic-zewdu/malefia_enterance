import { userActionTypes } from './../actions/user-action-types';

const INITIAL_STATE = {
    loading: true,
    currentUser: null,
    error: null
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGN_IN_START:
            return { ...state, loading: true, error: '' }
        case userActionTypes.SIGN_IN_SUCCESS:
            return { ...state, loading: false, error: false, currentUser: action.payload }
        case userActionTypes.SIGN_IN_ERROR:
            return { ...state, loading: false, error: action.error }
        case userActionTypes.SIGN_UP_START:
            return { ...state, loading: true, error: '' }
        case userActionTypes.SIGN_UP_SUCCESS:
            return { ...state, loading: false, error: false, currentUser: action.payload }
        case userActionTypes.SIGN_UP_ERROR:
            return { ...state, loading: false, error: action.error, currentUser: {} }
        case userActionTypes.CHECK_USER_SESSION_START:
            return { ...state, loading: true, error: false }
        case userActionTypes.CHECK_USER_SESSION_SUCCESS:
            return { ...state, loading: false, error: false, currentUser: action.payload }
        case userActionTypes.CHECK_USER_SESSION_ERROR:
            return { ...state, loading: false, error: action.error }
        default:
            return state;
    }
};
export default userReducer