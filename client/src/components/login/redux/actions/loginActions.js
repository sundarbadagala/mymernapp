import * as actionTypes from '../actionTypes'

export const loginReqest=(payload)=>{
    return{
        type: actionTypes.FETCH_LOGIN_REQUEST,
        payload
    }
}

export const loginSuccess=(payload)=>{
    return{
        type: actionTypes.FETCH_LOGIN_SUCCES,
        payload
    }
}

export const loginFail=(payload)=>{
    return{
        type: actionTypes.FETCH_LOGIN_FAIL,
        payload
    }
}