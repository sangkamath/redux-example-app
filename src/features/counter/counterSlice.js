import { create } from "@mui/material/styles/createTransitions";
import { createSlice } from "@reduxjs/toolkit";

/*
Redux toolkit allows us to write "mutating" logic in reducers.
It doesn't actually mutate the state because it uses the immer library.
which detects changes to "draft state" and produces a brand new
immutable state based off those changes
*/

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers:  {
        increment: state=> { state.value += 1},
        decrement: state=> { state.value -= 1},
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount}  = counterSlice.actions;
export default counterSlice.reducer;

/*
console.log(counterSlice.actions.increment());
*/
// { type: "counter/increment"};

///generates slice reducer function that knows how to respond to all action types

/*
const newState = counterSlice.reducer(
    {value: 10},
    counterSlice.actions.increment()
)
console.log(newState);
*/
// { value: 11}

//This funciton below is called a thunk and allows us to perform async logic.
//It can be dispatched like a regular action: "dispatch(incrementAsync(10))"
//This will call the thunk with the "dispatch" function as the first argument
//async code can then be executd and other actions can be dispatched

export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

/*

store.dispatch(incrementAsync(5));
*/

export const selectCount = state => state.counter.value;