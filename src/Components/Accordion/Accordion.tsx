import { useReducer, useState } from "react";
import { TOGGLE_COLLAPSE, reducer } from "./Reducer";

type ItemType = {
  title: string;
  value: any;
};

type AccordionPropseType = {
  name: string;

  changeCollapsed: Function;
  collapsed: boolean;
  onClick: (value: any) => void;
  items: ItemType[];
};

type AccordionTitleType = {
  changeCollapsed: (event: React.MouseEvent<HTMLHeadingElement>) => void;
  name: string;
  collapsed: boolean;
};

function Accordion(props: AccordionPropseType) {
  return (
    <div>
      <AccordionTitle
        name={props.name}
        changeCollapsed={() => props.changeCollapsed(!props.collapsed)}
        collapsed={props.collapsed}
      />
      {!props.collapsed && (
        <AccordionBody onClick={props.onClick} items={props.items} />
      )}
    </div>
  );
}

                // Редьюсер \\\\\\\\\\\\\\\\\\

export function Accordion1(props: AccordionPropseType) {
  // let [collapsed, setCollapsed] =useState(false)
  let [state, dispatch] = useReducer(reducer, { collapsed: false });

  return (
    <div>
      {/* <AccordionTitle
      name={props.name}
      changeCollapsed={() => setCollapsed(!collapsed)}
      collapsed={props.collapsed}
      /> */}

      <AccordionTitle
        name={props.name}
        changeCollapsed={() => dispatch({ type: TOGGLE_COLLAPSE })}
        collapsed={props.collapsed}
      />
      {!state.collapsed && (
        <AccordionBody onClick={props.onClick} items={props.items} />
      )}
    </div>
  );
}

function AccordionTitle(props: AccordionTitleType) {
  return <h2 onClick={props.changeCollapsed}>{props.name}</h2>;
}

type AccordionBodyPropsType = {
  onClick: (value: any) => void;
  items: ItemType[];
};

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li
          onClick={() => {
            props.onClick(item.value);
          }}
          key={index}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default Accordion;
