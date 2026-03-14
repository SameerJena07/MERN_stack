import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import Ai from './assets/ai.png'
import Arpit from './assets/arpit.png'
import Biswa from './assets/biswa.png'

function App() {

  return (
    <div className="container">
        <UserCard name='Sameer' desc="desc1" image={Ai} style={{"border-radius":"10px"}}/>
        <UserCard name='Arpit' desc="desc2" image={Arpit} style={{"border-radius":"10px"}}/>
        <UserCard name='Biswajit' desc="desc3" image={Biswa} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
