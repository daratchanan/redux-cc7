import React from 'react'
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay'
import CounterPanel from '../../components/CouterPanel/CounterPanel'

function Counter() {
   return (
      <div className="App">
         <h1>Welcome to my counter. By Nat</h1>
         <CounterDisplay />
         <CounterPanel />
      </div>
   )
}

export default Counter;
