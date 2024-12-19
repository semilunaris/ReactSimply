import React from "react";
import { useState } from "react";

export default {
    title: 'React memo demo'
}

const NewMessengerCounter = (props: {count: number}) =>{
return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) =>{
    console.log(props.users)
    return (
        <div>
            {props.users.map((u, i) => {
                return <div key={i}>{u}</div>;
            })}
        </div>
    );}

const Users = React.memo(UsersSecret)

export const Example1 = () =>{
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Tom', 'Jack', 'Jon'])
    const addUser = () => {
        const newUsers = [...users, 'Sophie' + new Date().getTime()]
    
        setUsers(newUsers)
    }

    return <>
     <button onClick={()=>{setCounter(counter+1)}}>+</button>
     <button onClick={addUser}>add users</button>
       <NewMessengerCounter count={counter}/>
       <Users users={users}/>
    </>
}