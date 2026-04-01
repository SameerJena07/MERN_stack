import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  function handleClick (){
    setCount(count+1);
  }

  return (
    <div>
      <Button handleClick={handleClick} text="click me">
        <h1>{count}</h1>
      </Button>

      {/* <Card name="Sameer Jena">
        <h1>I am Full Stack Developer</h1>
        <p>I am from cse background</p>
        <p>Now I am doing B.Tech</p>
      </Card> */}
    </div>
  )
}

export default App
