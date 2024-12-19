import React, { useEffect, useState } from "react"
import './Clock.css'

type PropsType = {
mode?: 'digital' | 'analog'
}

const twoDigitsString = (num: number) => num<10? "0" + num: num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(()=>{
     const interval = setInterval(()=>{
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(interval)
        }
}, [])

 
let view 

switch(props.mode){
case 'analog':
    view = <AnalogClockView date={date}/>
     break;
  case 'digital':
    default:
        view = <DigitalClockView date={date}/>

        }
return <div>
    {view} 
</div>

}

type ClockViewPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) =>{
return  <>
<span>{twoDigitsString(date.getHours())}</span>
:
<span>{twoDigitsString(date.getMinutes())}</span>
:
<span>{twoDigitsString(date.getSeconds())}</span>
</>
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({ date }) => {
    const getHourStyle = (date: Date) => {
      const degree = (360 / 12) * (date.getHours() % 12); // Hours hand rotates 360 degrees for 12 hours
      return {
        transform: `rotate(${degree + (360 / 12) * (date.getMinutes() / 60)}deg)`, // Add minute influence
      };
    };
  
    const getMinuteStyle = (date: Date) => {
      const degree = (360 / 60) * date.getMinutes(); // Minute hand rotates 360 degrees for 60 minutes
      return {
        transform: `rotate(${degree}deg)`,
      };
    };
  
    const getSecondStyle = (date: Date) => {
      const degree = (360 / 60) * date.getSeconds(); // Second hand rotates 360 degrees for 60 seconds
      return {
        transform: `rotate(${degree}deg)`,
      };
    };
  
    return (
      <div className="clock">
        <div className="clock_hand hour" style={getHourStyle(date)}></div>
        <div className="clock_hand minute" style={getMinuteStyle(date)}></div>
        <div className="clock_hand second" style={getSecondStyle(date)}></div>
        <div className="clock_center"></div>
      </div>
    );
  };
    
    
