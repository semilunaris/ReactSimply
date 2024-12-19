import { useState } from "react";

function Example(props:any) {
  let [value, changeValue] = useState(0);

  const starsStyle = {
    display: "flex",
  };

  return (
  <div>
      <div style={starsStyle}>
      <Star selected={value > 0} changeValue={changeValue} value={1}/>
      <Star selected={value > 1} changeValue={changeValue} value={2}/>
      <Star selected={value > 2} changeValue={changeValue} value={3}/>
      <Star selected={value > 3} changeValue={changeValue} value={4}/>
      <Star selected={value > 4} changeValue={changeValue} value={5}/>
     
     
     </div>

      
  </div>
  );
 
}



export function ExampleControlled(props: any) {
 

  const starsStyle = {
    display: "flex",
  };

  return (
  <div>
      <div style={starsStyle}>
      <Star1 selected={props.value > 0} onClick={()=>props.onClick(1)} />
      <Star1 selected={props.value > 1} onClick={()=>props.onClick(2)} />
      <Star1 selected={props.value > 2} onClick={()=>props.onClick(3)} />
      <Star1 selected={props.value > 3} onClick={()=>props.onClick(4)} />
      <Star1 selected={props.value > 4} onClick={()=>props.onClick(5)} />
     
     
     </div>

      
  </div>
  );
 
}
export type raitingValueType = 0|1 | 2 | 3 | 4 | 5

type StarPropeType = {
  selected: boolean;
  changeValue: (value: raitingValueType) => void;
  value: raitingValueType

};

function Star(props: StarPropeType) {
  return (
    <span onClick={() => props.changeValue(props.value)}>
      {props.selected ? "🌟" : "star "}{" "}
    </span>
  );
}

type Star1PropeType = {
  selected: boolean

  onClick: () => void;
}

function Star1(props: Star1PropeType) {
  return (
    <span onClick={props.onClick}>
    
      {props.selected ? "🌟" : "star "}{" "}

    </span>
  );
}

export default Example;


