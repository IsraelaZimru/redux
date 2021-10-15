import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, show: true };


//דרך עדכנית לצור 'סטט' חדש
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.show = !state.show;
        },
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
});


export default store;
export const counterAction = counterSlice.actions;



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

