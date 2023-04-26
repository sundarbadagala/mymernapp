import { combineReducers } from "redux";
import {connectRouter} from 'connected-react-router'
import loginReducer from "components/login/redux/reducers/loginReducer";
import registerReducer from "components/register/redux/reducer";
import { history } from "utils/history";

const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: loginReducer,
    register:registerReducer
})

export default rootReducer