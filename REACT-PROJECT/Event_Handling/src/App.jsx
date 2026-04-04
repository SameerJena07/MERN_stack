import { useState } from 'react'
import './App.css'

function App() {
  
  function handleClick(){
    alert("I am Clicked!!")
  }

  function handleMouseOver(){
    alert("The para is selected..")
  }

  function handleInputChange(e){
    // console.log("The input value is changed");
    console.log("The value till now:", e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert ("Form submit kardu kya?")
  }

  return (
    <div>

      {/* <button onClick={alert("imidiate Invoke")}> 
        Click Me
      </button> */}

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form> */}

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
