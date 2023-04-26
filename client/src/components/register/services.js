import * as endpoints from './endpoints'
import request from 'utils/axios/service'

export default class RegisteServices{
    fetchRegisterApi(payload){
        return request.post(endpoints.REGISTER, payload)
    }
}