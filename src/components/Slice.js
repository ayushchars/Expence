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
            state.transaction.splice(index, 2);
        },
    }
})

export const { deleteTransaction, addTransaction } = expence.actions;
export default expence.reducer;