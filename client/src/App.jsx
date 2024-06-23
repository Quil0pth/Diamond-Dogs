import { useState } from 'react'
import Items from './components/Items'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-head text-8xl'>
        _Diamond Dogs' Redemption_
      </div>
      <Items />
    </>
  )
}

export default App
