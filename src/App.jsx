import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './component/Header'
import { Home } from './component/Home'
import About from './component/About'
import Resume from './component/Resume'
import Services from './component/Services'
import aosObserver from './utils/aosObserver'
import scrollObserver from './utils/scrollObserver'

function App() {console.log
  const [count, setCount] = useState(0)
  useEffect(()=>{
    aosObserver();
    scrollObserver();
  }, [])
  const handleScroll=()=>{
    parts=(document.querySelectorAll('.part'));
    console.log('parts',parts);
  }
    return (
    <>
      <Header></Header>
      <section className="part" id="Home"><Home ></Home></section>
      <section className="part" id="About"> <About ></About></section>
      <section className="part" id="Resume"><Resume ></Resume></section>
      <section className="part" id="Services"><Services ></Services></section>
    </>
  )
}

export default App
