import React, { useCallback, useMemo, useState } from "react";
import { isClassStaticBlockDeclaration } from "typescript";

export default {
    title: 'useMemo'
}

export const DifficultCountExample = () => {

 const [a, setA] = useState(3)
 const [b, setB] = useState(3)

 let resultA = 1;
 let resultB = 1;


resultA = useMemo(()=>{
    let tempResultA=1
    for (let i=1; i<=a; i++){
        let fake = 0
        while(fake < 100000){
            fake++;
            const fakeValue = Math.random()
        }
        resultA = resultA*i
     }
     return resultA
},[a])
 




 for (let i=1; i<=b; i++){
    resultB = resultB*i
 }

 return <>
    <input value={a} onChange={(e)=>setA(+e.currentTarget.value)} />
    <input value={b} onChange={(e)=>setB(+e.currentTarget.value)} />
     <hr />
     <div>
        Result for a: {resultA}
     </div>
     <div>
        Result for b: {resultB}
     </div>
 </>

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
    
    export const HelpForReactMemo = () =>{
        const [counter, setCounter] = useState(0)
        const [users, setUsers] = useState(['Tom', 'Jack', 'Jon'])
       
        const newArray = useMemo(()=>{
          return users.filter(u=>u.toLowerCase().indexOf('a')>-1)
        },[users]) 

        const addUser = () => {
            const newUsers = [...users, 'Sophia' + new Date().getTime()]
        
            setUsers(newUsers)
        }
    
        return <>
         <button onClick={()=>{setCounter(counter+1)}}>+</button>
         <button onClick={addUser}>add user</button>
         {counter}
        <Users users={newArray}/>
        </>
    }

    export const LikeUseCallback = () =>{
        const [counter, setCounter] = useState(0)
        const [books, setBooks] = useState(['React', 'JS', 'Css', 'HTML'])
       
    

        const memorizedAddbook = useMemo(()=>{ 
            return ()=>   
            { const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)}
        }, [books])

        const memorizedAddbook2 = useCallback(()=>   
            { const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)}
        , [books])
    
        return <>
         <button onClick={()=>{setCounter(counter+1)}}>+</button>
         <button onClick={memorizedAddbook}>add book</button>
         {counter}
        <Book
        //   books = { books}
          addBook = {memorizedAddbook} />
        </>
    }


    type BookSecretPropsType = 
        {
        // books: Array<string>;
        addBook: ()=> void}

    const BooksSecret = (props: BookSecretPropsType) =>{

        return (
            <div>
                <button onClick={()=>props.addBook}></button>
                {
                // props.books.map((book, i) => {
                //     return <div key={i}>{book}</div>;
                }
            </div>
        );}

       const Book = React.memo(BooksSecret) 