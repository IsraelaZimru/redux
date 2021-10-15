import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth-slice';
import { counterSlice } from './counter-slice';


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    },
});


export default store;



//דרך ישנה ליצור רדוסר
// const conuterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "increment":
//             return {
//                 show: true,
//                 counter: state.counter + action.payload
//             };
//         case 'decrement':
//             return {
//                 show: true,
//                 counter: state.counter - 1
//             };
//         case "toggle":
//             return {
//                 ...state,
//                 show: !state.show
//             };
//         default:
//             return state
//     }
// }


// const store = createStore(conuterReducer);

