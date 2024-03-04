import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Portfolio from './components/Porfolio/Porfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Skills/>
      <Services/>
      <Portfolio/>
    </>
  )
}

export default App
