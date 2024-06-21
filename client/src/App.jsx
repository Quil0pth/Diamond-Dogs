import { useState } from 'react'
import Items from './components/Items'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-head text-8xl text-zinc-800'>
        Diamond Dogs' Redemption
      </div>
      <Items />
    </>
  )
}

export default App
