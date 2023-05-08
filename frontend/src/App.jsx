import React from 'react'
import axios from 'axios'

const myUrl = "http://localhost:5000/api/users"

const App = () => {
  const [user, setUser] = React.useState([])
  const getData = async() => {
    const response = await axios.get(myUrl)
    setUser(response.data) 
  }
  React.useEffect(() => {
    getData()
  }, [])
console.log(user);


  return (
    <div className='h-screen justify-center flex items-center'>
      
    </div>
  )
}

export default App
