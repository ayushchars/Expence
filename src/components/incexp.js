import React from 'react'
import { useSelector } from 'react-redux'


function Incexp() {

    const state = useSelector(state => state.expence.transaction)

    const amount = Array.isArray(state) ? state.map(item => typeof item.amount === 'number' ? item.amount : 0) : [];

    const income = amount.filter(item => item > 0).length > 0
        ? parseFloat(amount.filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0).toFixed(2))
        : 0;

    const expence = amount.length > 0
        ? parseFloat(amount.filter(item => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1).toFixed(2)
        : 0;




    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">₹ {income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">₹ {expence}</p>
                </div>
            </div>
        </>
    )
}

export default Incexp

