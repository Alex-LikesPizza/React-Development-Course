import { legacy_createStore } from "redux";

const counterReducer = (state = {counter: 0}, action) => {
  if(action.type === "INCREMENT"){
    return{
      counter: state.counter +1,
    }
  }
  if(action.type === "DECREMENT"){
    return{
      counter: state.counter -1,
    }
  }
  return state;               
};

const counterStore = legacy_createStore(counterReducer);

export default counterStore;