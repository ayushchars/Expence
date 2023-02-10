import { createSlice } from "@reduxjs/toolkit";

const expence = createSlice({
    name: "expence",
    initialState: {
        transaction: []
    },
    reducers: {
        addTransaction: (state, action) => {
            const newTransaction = {
                id: state.transaction.length + 1,
                text: action.payload.text,
                amount: action.payload.amount
            }
            state.transaction.push(newTransaction)
        },
        deleteTransaction: (state, action) => {
            const index = state.transaction.findIndex(t => t.id === action.payload);
            state.transaction.splice(index, 1);
        },
    }
});

export const { deleteTransaction, addTransaction } = expence.actions;

const persistedState = localStorage.getItem("expenceState");
const initialState = persistedState ? JSON.parse(persistedState) : { transaction: [] };

const expenceReducer = (state = initialState, action) => {
    const newState = expence.reducer(state, action);
    localStorage.setItem("expenceState", JSON.stringify(newState));
    return newState;
};

export default expenceReducer;
