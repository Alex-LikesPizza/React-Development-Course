import { legacy_createStore } from "redux";
import counterSlice from "./counter-slice";
// import authSlice from "./auth-slice";
import { configureStore } from "@reduxjs/toolkit";


const counterStore = configureStore({
  reducer:{
    counter: counterSlice.reducer,
    // auth: authSlice.reducer,
  }
})

// const counterReducer = (state = {counter: 0, visibility: true}, action) => {
//   if(action.type === "INCREMENT"){
//     return {
//       counter: state.counter +1,
//       visibility: state.visibility,
//     }
//   }
//   if(action.type === "DECREMENT"){
//     return{
//       counter: state.counter -1,
//       visibility: state.visibility,
//     }
//   }
//   if(action.type === "TOGGLE"){
//     return{
//       counter: state.counter,
//       visibility: !state.visibility,
//     }
//   }
//   return state;               
// };
// const counterStore = legacy_createStore(counterReducer);

export default counterStore;