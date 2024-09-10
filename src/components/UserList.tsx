import { useContext } from "react"
import { UserContext } from "../context"

export const UserList = () => {
    const context = useContext(UserContext)
    if(!context){
        throw new Error("error...")
    }
    const {users,removeUser} = context
    
    return <>
        <h3>UserList</h3>
        {users.map(user=>
            <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.salary}</p>
                <button onClick={()=>removeUser(user.id)}>Delete</button>
            </div>
        )}

    </>
} 