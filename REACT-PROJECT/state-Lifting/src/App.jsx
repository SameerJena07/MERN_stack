import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  //Create State
  //Manage State
  //Change State
  //Sync State in every Child
  const [name, setName] = useState('');

  return (
    <div>
    <Card name={name} setName={setName}/>
    <p>I am inside parent component and value of name is: {name}</p>
    </div>
  )
}

export default App
