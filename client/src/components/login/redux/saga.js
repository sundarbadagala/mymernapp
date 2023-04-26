import {put, call, takeLatest} from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import { push, replace } from 'connected-react-router'

import loginService from '../services'

const LoginService = new loginService()

function* loginUser(reqBody){
    try{
        const res = yield call(LoginService.fetchRegisterApi, reqBody.payload)
        if(res.status === 200){
            const token = res.data.token
            localStorage.setItem("user", token)
            yield put({
                type : actionTypes.FETCH_LOGIN_SUCCES,
                payload: res.data.data
            })
            reqBody.payload.handleSuccess(res)
            yield put(push('/hello'))
        }else{
            yield put({
                type: actionTypes.FETCH_LOGIN_FAIL,
                payload:'Something Went Wrong'
            })
        }
    }catch(error){
        yield put({
            type: actionTypes.FETCH_LOGIN_FAIL,
            payload: error.message
        })

    }
}


export default function* loginSage () {
    yield takeLatest(actionTypes.FETCH_LOGIN_REQUEST, loginUser)
}