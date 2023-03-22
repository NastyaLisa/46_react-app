import { legacy_createStore } from "redux";
export const INCREMENT_COFFE = "INCREMENT_COFFE";
export const DECREMENT_COFFE = "DECREMENT_COFFE";
export const INCREMENT_SHUGAR = "INCREMENT_SHUGAR";
export const DECREMENT_SHUGAR = "DECREMENT_SHUGAR";
export const INCREASE_COFFEE = "INCREASE_COFFEE";
export const INCREASE_SHUGAR = "INCREASE_SHUGAR";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const RESET = "RESET";

const initialState = {
  coffee: 0,
  shugar: 0,
  isLoggedIn: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COFFE:
      return {
        ...state,
        coffee: state.coffee + 1,
      };
    case INCREMENT_SHUGAR:
      return {
        ...state,
        shugar: state.shugar + 1,
      };
    case DECREMENT_COFFE:
      return {
        ...state,
        coffee: state.coffee - 1,
      };
    case DECREMENT_SHUGAR:
      return {
        ...state,
        shugar: state.shugar - 1,
      };

    case INCREASE_SHUGAR:
      return {
        ...state,
        shugar: state.shugar + action.payload.number,
      };
    case INCREASE_COFFEE:
      return {
        ...state,
        coffee: state.coffee + action.payload.number,
      };

    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        coffee: 0,
        shugar: 0,
      };
      
    case RESET:
      return {
        ...state,
        coffee: 0,
        shugar: 0,
      };
  }
  return state;
};

const store = legacy_createStore(counterReducer);

export default store;
