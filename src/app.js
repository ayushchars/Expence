import React from 'react'
import Addtransation from './components/Addtransation'
import Balance from './components/Balance'
import Header from "./components/Header"
import Incexp from './components/incexp'
import TransationList from './components/TransationList'
import "./app.css"
function App() {

    return (
        <div>
            <Header />
            <div className='container'>
                <Balance />
                <Incexp />
                <TransationList />
                <Addtransation />
            </div>
        </div>
    )
}

export default App
