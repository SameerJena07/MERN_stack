import { useEffect, useState } from 'react'

import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {
  
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

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
  
  //variation : 4
  //Multiple dependencies
  // useEffect(() => {
  //   alert ("I will run every time when count/total is updated")
  // }, [count, total])
  
  //variation : 5
  //Let's add a clean of function
  // useEffect(() => {
  //   alert ("Count is Updated")
  
  //   return () => {
  //     alert ("count is unmounted from UI")
  //   }
  // }, [count])
  

  // function handleClick(){
  //   setCount(count + 1);
  // }

  // function handleClickTotal(){
  //   setTotal(total + 1);
  // }
  

  return (
    <div>

      {/* <LoggerComponent/> */}

      {/* <TimerComponent/> */}

      {/* <DataFetcher/> */}

      {/* <ResizeComponent/> */}

      {/* <MultiEffectComponent/> */}

      {/* <button onClick={handleClick}>
        Update Count
      </button>
      <br />
      Count is : {count}
      <br />
      <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br />
      Total is : {total} */}
    </div>
  )
}

export default App
