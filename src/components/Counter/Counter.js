import React, { useState } from 'react'

const Counter = () => {

  const [ counterValue, setCounterValue] = useState(0);

  const handleIncrement = () => {
    setCounterValue(counterValue+1);
  }

  const handleDecrement = () => {
    setCounterValue(counterValue-1);
  }

  return (
    <div>
      <h2>Counter Example | Testing Events with State and updating state</h2>
      <p>
        Initial Counter Value: 
        <span data-testid="counterValueEl">{counterValue}</span>
      </p>

      <button type='button' 
      data-testid="incrementBtn"
        onClick={handleIncrement}>Increment</button>
      <button type='button' 
      data-testid="decrementBtn"
        onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter