import React from 'react'
import { useSelector } from 'react-redux'
import Tranactions from './Tranactions'
function TransationList() {
    const state = useSelector(state => state.expence.transaction)

    return (
        <>
            <h3>History</h3>

            <ul className="list">
                {state.map(item =>
                    <Tranactions item={item} key={item.id} />
                )}


            </ul>
        </>
    )
}

export default TransationList
