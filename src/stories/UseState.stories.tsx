import React  from "react";
import { useState, useMemo } from "react";

export default {
    title: 'useState demo'
}

function generateData(){
    return 123243243
}

export const Example1 = () =>{
    console.log ('example1')


    const [counter, setCounter] = useState(generateData)
 
   const changer = (state: number) => {
    return state+1
    
   }

    return <>
     <button onClick={()=>{setCounter(changer)}}>+</button>
      {counter}
    </>
}