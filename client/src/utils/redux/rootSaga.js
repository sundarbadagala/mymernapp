import {spawn} from 'redux-saga/effects'
import loginSage from 'components/login/redux/saga'
import registerSaga from 'components/register/redux/saga'

export default function* rootSaga() {
    yield spawn(loginSage)
    yield spawn(registerSaga)
  }