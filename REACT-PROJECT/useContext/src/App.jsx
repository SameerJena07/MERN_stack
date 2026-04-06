import { createContext, useState} from 'react'
import './App.css'
import FirstChild from './components/FirstChild';

//step 1: create context
// const UserContext = createContext();
//step 2: wrap all the context in a provider
//step 3: pass value
//step 4: make consume under a consumer

const ThemeContext = createContext();

function App() {

  const [user, setUser] = useState({name:"Sameer"})
  const [theme, setTheme] = useState('light');
  return (

    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?'beige':'black'}}>
        <FirstChild/>
      </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
    


    // <>
    //   <UserContext.Provider value={user}>
    //     <FirstChild/>
    //   </UserContext.Provider> 
    // </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}