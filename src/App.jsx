import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './component/Header'
import { Home } from './component/Home'
import About from './component/About'
import Resume from './component/Resume'
import Services from './component/Services'
import aosObserver from './utils/aosObserver'

function App() {
  const [count, setCount] = useState(0)
  useEffect(aosObserver, [])

  
    function increment(){
      setCount((prev) =>{
        return prev+1
      });
      setCount((prev) =>{
        return prev+1
      });
    }
    return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Resume></Resume>
      <Services></Services>
    </>
  )
}

export default App
