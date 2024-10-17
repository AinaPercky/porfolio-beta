import { useEffect, useState } from 'react'

import Header from './component/Header'

import aosObserver from './utils/aosObserver'
import scrollObserver from './utils/scrollObserver'
import { Outlet } from 'react-router-dom'

function App() {console.log
  useEffect(()=>{
    aosObserver();
    scrollObserver();
  }, [])
    return (
    <>
      <Header></Header>
        <section>
          <Outlet/>
        </section>
    </>
  )
}

export default App
