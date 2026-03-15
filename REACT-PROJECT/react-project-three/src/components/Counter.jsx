import React from 'react'
import './Counter.css'

const Counter = () => {
    // const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
      <p id='para'>You have clicked 0 times</p>
      <button id='btn'>Click me</button>
    </div>
  )
}

export default Counter
