import { useState } from 'react'
import Items from './components/Items'
import './App.css'
import Viewport from './components/Viewport'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-head text-8xl'>
        _Diamond Dogs' Redemption_
      </div>
      <Viewport />
      <Items />
    </>
  )
}

export default App
