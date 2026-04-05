import { useEffect, useState } from 'react'

import './App.css'

function App() {
  
  const [count, setCount] = useState(0);

  //First -> side effect function
  //second -> clean of function
  //third -> comma separated dependent list

  //variation : 1
  //runs on every render
  // useEffect(() => {
  //     alert ("I will run on each render")
  // })

  //variation : 2
  //that runs on only firts render
  // useEffect(() => {
  //   alert ("I will run only on 1st render")
  // }, [])
  
  //variation : 3
  // useEffect(() => {
  //   alert ("I will run every time when count is updated")
  // }, [count])
  

  function handleClick(){
    setCount(count + 1);
  }
  

  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
      <br />
      Count is : {count}
    </div>
  )
}

export default App
