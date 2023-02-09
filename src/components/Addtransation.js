import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTransaction } from './Slice'

function Addtransation() {
    const [text, settext] = useState("")
    const [amount, setamount] = useState()

    const dispatch = useDispatch()
    const clickHandle = (e) => {
        e.preventDefault()
        dispatch(addTransaction({ text, amount }))
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label >Text</label>
                    <input type="text" id="text" placeholder="Enter text..." value={text} onChange={e => settext(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Amount <br />
                        (negative - expense, positive - income)</label>
                    <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={e => setamount(parseFloat(e.target.value))} />
                </div>
                <button className="btn" onClick={clickHandle}>Add transaction</button>
            </form>
        </div>
    )
}

export default Addtransation
