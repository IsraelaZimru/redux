import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, show: true };

//דרך עדכנית לצור 'סטט' חדש
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload;
            state.show = true;
        },
        decrement(state) {
            state.counter--;
            state.show = true;
        },
        toggle(state) {
            state.show = !state.show;
        },
    }
})



export const counterActions = counterSlice.actions; //עכשיו האקשן נוצר עבורנו
