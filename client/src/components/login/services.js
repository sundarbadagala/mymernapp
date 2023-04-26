import * as endpoints from './endpoints'
import request from 'utils/axios/service'

export default class loginService {
    fetchRegisterApi(payload){
        return request.post(endpoints.LOGIN, payload)
    }
}