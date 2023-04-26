import * as actionTypes from '../actionTypes'

const intitialState={
    data:[],
    error:'',
    isLoading:false
}

const loginReducer=(state=intitialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_LOGIN_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_LOGIN_SUCCES:
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        case actionTypes.FETCH_LOGIN_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default loginReducer