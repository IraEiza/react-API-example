import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getUsers } from './services/users'

function App() {

  const [searchValue, setSearchValue] = useState('')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([])
  const timerId = useRef(null)

  async function fetchUsers() {
    const users = await getUsers()
    console.log(users)
    setUsers(users)
  }

  function handleOnChange (e) {
    setSearchValue(e.target.value)
  }

  // useEffect fetch users
  useEffect(() => {
    fetchUsers()
  }, [])

  // useEffect start and clear setInterval
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCounter((old) => old + 1)
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])


  return (
    <>
      <h1>React API Communication</h1>
      <p>Conter: {counter}</p>
      <input type="text" value={searchValue} onChange={handleOnChange}/>
      {/* <button onClick={handleOnClick}>Click me!</button> */}
    </>
  )
}

export default App
