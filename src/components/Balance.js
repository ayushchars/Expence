import React from 'react'
import { useSelector } from 'react-redux'

function Balance() {
    const state = useSelector(state => state.expence.transaction)
    const amount = state.map(item => item.amount)

    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>₹ {total}</h1>
        </div>
    )
}

export default Balance



