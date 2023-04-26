import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { history } from "utils/history";
import rootReducer from "./rootReducer";
import rootSaga from './rootSaga'


const sagaMiddleware = createSagaMiddleware()


const midlewares = [sagaMiddleware, routerMiddleware(history)]

const store = createStore(rootReducer, applyMiddleware(...midlewares))

export default store

sagaMiddleware.run(rootSaga)