import httpCommon from "../../http-common"
import {
    signInSuccess, singInStart,
    signInError,
    signUpStart,
    signUpSucces,
    signUpError,
    checKUserSeesionStart,
    checkUSerSessionError,
    checKUserSeesionSuccess
} from "./user-actions"

export const signIn = ({ email, password }, push) => {
    return dispatch => {
        dispatch(singInStart())
        httpCommon.post('/login', { email, password })
            .then(res => {
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('id', res.data.user._id)
                dispatch(signInSuccess(res.data))
                push('/')
            })
            .catch(e => {
                const error = (e.response && e.response.data) ? e.response.data.message : 'internal server error'
                dispatch(signInError(error))
            })
    }
}

export const signUp = ({ email, password }, push) => {
    return dispatch => {
        dispatch(signUpStart())
        httpCommon.post('/signup', { email, password })
            .then(res => {
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('id', res.data.user._id)
                dispatch(signUpSucces(res.data))
                push('/')
            })
            .catch(e => {
                const error = (e.response && e.response.data) ? e.response.data.message : 'internal server error'
                dispatch(signUpError(error))
            })
    }
}


export const checkUserSession = () => {
    const token = sessionStorage.getItem('token')
    const id = sessionStorage.getItem('id')
    return dispatch => {
        dispatch(checKUserSeesionStart())
        httpCommon.get('/checkuser?token=' + token + '&id=' + id)
            .then(res => {
                dispatch(checKUserSeesionSuccess(res.data))
            })
            .catch(e => {
                const error = (e.response && e.response.data) ? e.response.data.message : 'internal server error'
                dispatch(checkUSerSessionError(error))
            })
    }
}