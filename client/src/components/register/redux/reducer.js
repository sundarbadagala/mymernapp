import * as actionTypes from "./actionTypes";

const intitialState = {
  data: [],
  error: "",
  isLoading: false,
};

const registerReducer = (state = intitialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case actionTypes.FETCH_REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default registerReducer