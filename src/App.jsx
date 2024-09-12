import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Drag from './Drag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Drag/>
    </>
  )
}

export default App
