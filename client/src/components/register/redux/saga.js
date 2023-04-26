import * as actionTypes from './actionTypes'
import { put, call, takeLatest } from '@redux-saga/core/effects'
import { push, replace } from 'connected-react-router'
import RegisteServices from '../services'

const registerService = new RegisteServices

function* registerUser(reqBody){
    try{
        const res = yield call(registerService.fetchRegisterApi, reqBody.payload)
        if(res.status === 200){
            yield put({
                type : actionTypes.FETCH_REGISTER_SUCCESS,
                payload: res.data.data
            })
            reqBody.payload.handleSuccess(res)
            yield put(push('/'))
        }else{
            yield put({
                type: actionTypes.FETCH_REGISTER_FAIL,
                payload:'Something Went Wrong'
            })
        }
    }catch(error){
        yield put({
            type: actionTypes.FETCH_REGISTER_FAIL,
            payload: error.message
        })

    }

}

export default function* registerSaga(){
    yield takeLatest(actionTypes.FETCH_REGISTER_REQUEST, registerUser)
}