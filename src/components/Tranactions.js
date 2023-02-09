import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTransaction } from './Slice';
function Tranactions({ item }) {

    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(deleteTransaction(id))
    }

    const sign = item.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className={item.amount < 0 ? " minus" : "plus"}>
                {item.text} <span>{sign} ₹ {item.amount}</span><button className="delete-btn" onClick={() => handleClick(item.id)}>x</button>
            </li>
        </div >
    )
}

export default Tranactions;
