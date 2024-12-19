import { title } from "process";
import { MouseEventHandler, useState, KeyboardEvent, useEffect } from "react";
import styles from "./Select.module.css";

type ItemType = {
  value: string;
  title: string;
};

type SelectPropsType = {
  value?: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export function SelectDimych(props: SelectPropsType) {
  const [active, setActive] = useState(true);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  const selectedItem = props.items.find((i) => i.value === props.value);
  const hoveredItem = props.items.find((i) => i.value === hoveredElementValue);

  useEffect(()=>{
    setHoveredElementValue(props.value)
  }, [props.value])

  const togleItems = () => {
    setActive(!active);
  };
  const onItemClick = (value: any) => {
    props.onChange(value);
    togleItems();
  };

 const onKeyUp= (e: KeyboardEvent<HTMLDivElement>) => {
  console.log('keyUp')
  if(e.key === 'ArrowDown'|| e.key === 'ArrowUp'){
    for(let i=0; i< props.items.length; i++){
      if(props.items[i].value === hoveredElementValue){
        const pretendentElement = e.key === 'ArrowDown'? props.items[i+1]: props.items[i-1]

        if(pretendentElement){
          props.onChange(pretendentElement.value)
          return;
        }
    
      }
    }
    if(!selectedItem){
      props.onChange(props.items[0].value)
    }
 
  }

  if(e.key === 'Escape'|| e.key === 'Enter')
   
    setActive(false)
 }

  return (
    <div className={styles.selectDimych} onKeyUp={onKeyUp} tabIndex={0}>
      <span className={styles.main} onClick={togleItems}>
        {selectedItem && selectedItem.title}
      </span>
      {active && (
        <div className={styles.items}>
          {props.items.map((i) => (
            <div
              onMouseEnter={()=>{setHoveredElementValue(i.value)}} 

              className={
                styles.item + " " + (hoveredItem === i ? styles.selected : "")
              }
              onClick={() => {
                onItemClick(i.value);
              }}
            >
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
