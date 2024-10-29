import { useEffect, useState } from 'react'

import Header from './component/Header'

import aosObserver from './utils/aosObserver'
import scrollObserver from './utils/scrollObserver'
import { Outlet } from 'react-router-dom'
import { ContactUs } from './component/ContactUs'
import { Toaster } from 'react-hot-toast'

function App() {console.log
    return (
    <>
      <Toaster></Toaster>
      <Header></Header>
        <section>
          <Outlet/>
        </section>
    </>
  )
}

export default App
