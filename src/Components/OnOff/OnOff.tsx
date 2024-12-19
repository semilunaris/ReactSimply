import { useState } from "react"

type onOffEnterPropsType = {
    on: boolean
    setOn: (value:boolean) => void
}

export function OnOff(props: onOffEnterPropsType){

    const conteinerStyle = {
        display: "flex"
    }
    
    const onStyle = {
        width: "30px",
        height: '30px',
        border: "1px solid black",
        padding: "2px",
        backgroundColor: props.on? 'green': 'white'
    }
    const ofStyle = {
        width: "30px",
        height: '30px',
        border: "1px solid black",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.on? 'white': 'red'
    }
    const indicatorStyle ={
        width: "10px",
        height: '10px',
        borderRadius: "10px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor:props.on? 'green': 'red'
    } 

const onClicked =()=>{
    props.setOn(true)
}

const offClicked = ()=>{
     props.setOn(false)
}

return <div style={conteinerStyle}>
      <div style={onStyle} onClick={onClicked}>ON</div>
      <div style={ofStyle} onClick={offClicked}>OF</div>
      <div style={indicatorStyle}></div>
</div>
}