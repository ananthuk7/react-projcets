import { useState } from 'react'
import './App.css'
import AddUser from './components/AddUser'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])

  const handleAddUser = (uName, uAge) => {
    setUsers((prevUser) => [
      ...prevUser, { name: uName, age: uAge, id: Math.random().toString() }
    ])
  }


  return (
    <>
      <AddUser addUser={handleAddUser} />
      {users.length > 0 && <UserList users={users} />}
    </>
  )
}

export default App
