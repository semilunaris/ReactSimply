import { title } from "process";
import { MouseEventHandler, useState } from "react";
import './select.css'

type ItemType = {
  mindState: string;
  collor: string

};

type SelectPropsType = {
  items: ItemType[];
  title: string;
  collapsed: boolean;
  onClick: (event: React.MouseEvent<HTMLHeadingElement>) => void
  changeTitle: any
 
};




export function Select(props: SelectPropsType) {
   const [className, setClassName] = useState('select-title') 
  return (
    <div className="custom-select">
      <div className={className} onClick={props.onClick}>
        {props.title}
      </div>
      <div className={`select-options ${props.collapsed ? "collapsed" : ""}`}>
        {props.items.map((i) => (
          <div
            className="select-option"
            key={i.mindState}
            onClick={() => {
              props.changeTitle(i.mindState)
              setClassName(i.collor)
              ;
            }}
          >
            {i.mindState}
          </div>
        ))}
      </div>
    </div>
  );
}