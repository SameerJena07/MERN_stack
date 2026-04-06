import { createContext, useState} from 'react'
import './App.css'
import FirstChild from './components/FirstChild';

//step 1: create context
const UserContext = createContext();
//step 2: wrap all the context in a provider
//step 3: pass value
//step 4: make consume under a consumer

function App() {

  const [user, setUser] = useState({name:"Sameer"})

  return (
    <>
      <UserContext.Provider value={user}>
        <FirstChild/>
      </UserContext.Provider> 
    </>
  )
}

export default App
export {UserContext}