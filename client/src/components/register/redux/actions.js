import * as actionTypes from './actionTypes'

export const fetchRegisterRequest=(payload)=>({
    type:actionTypes.FETCH_REGISTER_REQUEST,
    payload
})

export const fetchRegisterSuccess=()=>({
    type: actionTypes.FETCH_REGISTER_SUCCESS,
    payload
})

export const fetchRegisterFail=(payload)=>({
    type: actionTypes.FETCH_REGISTER_FAIL,
    payload
})