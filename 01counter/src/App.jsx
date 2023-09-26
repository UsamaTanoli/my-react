import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  function increment() {
    if (count < 20) {
      setCount(count + 1)
    }
  }


  function decrement() {
    if (count > 0) {
      setCount(count - 1);

    }
  }
  
  function reset() {
    setCount(1)
  }

  return (

    <>
      <h1>counter = {count}</h1>
      <button onClick={increment}>increase</button>
      <br />
      <br />
      <button onClick={decrement}>decrease</button>
      <br />
      <br /> 
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App
