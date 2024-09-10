import { useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import { IUser } from './type'
import { UserContext } from './context'

function App() {
  const [users, setUsers] = useState<IUser[]>([
    { id: 1, name: "Anna", age: 23, salary: 240000, isMarried: true },
    { id: 2, name: "Hakob", age: 28, salary: 450000, isMarried: true },
    { id: 3, name: "Nare", age: 19, salary: 1000000, isMarried: false },
    { id: 4, name: "Narek", age: 39, salary: 600000, isMarried: true },
    { id: 5, name: "Mary", age: 26, salary: 780000, isMarried: false },
  ])

  const removeUser =(id:number):void =>{
    setUsers([...users.filter(user=>user.id != id)])
  }

  return (
    <>
      <UserContext.Provider value={{ users, removeUser,setUsers}}>
        <AddUser/>
        <UserList/>
      </UserContext.Provider>

    </>
  )
}

export default App
