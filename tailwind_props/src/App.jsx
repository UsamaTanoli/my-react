import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
    
  return (
    <>
    <h1 className='bg-blue-500 text-clip rounded-md text-black'>MackBook</h1>
 
      <Card  name="Review is given by Usama" btnText="Read Further"/>
      <Card  name="Review is given by Shanan The Techer" btnText="Read Further"/>

    </>
  )
}

export default App
