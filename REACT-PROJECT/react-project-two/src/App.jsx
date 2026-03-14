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
        <UserCard name='Arpit' desc="desc2" image={Arpit}/>
        <UserCard name='Biswajit' desc="desc3" image={Biswa}/>
    </div>
  )
}

export default App
