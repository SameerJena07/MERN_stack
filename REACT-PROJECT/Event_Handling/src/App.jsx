import { useState } from 'react'
import './App.css'

function App() {
  
  function handleClick(){
    alert("I am Clicked!!")
  }

  function handleMouseOver(){
    alert("The para is selected..")
  }

  

  return (
    <div>

      

      <p onMouseOver={handleMouseOver}>
        I am Paragraph
      </p>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default App
