import React from 'react'
import axios from 'axios'
import { Users } from './components'
const myUrl = "http://localhost:5000/api/users"

const App = () => {
  

  return (
    <div className='h-screen justify-center flex items-center'>
      <Users/>
    </div>
  )
}

export default App
