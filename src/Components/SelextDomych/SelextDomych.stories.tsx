import { title } from "process";
import { MouseEventHandler, useState } from "react";
import { SelectDimych } from "./SelextDomych";
import { action } from "@storybook/addon-actions";

export default {
  title: "SelectDimych",
  component: SelectDimych,
};

export const BaseExampleWithValue = () => {
    const [value, setValue] = useState('2')
return    <>
  <SelectDimych onChange={setValue}
   value={value} 
   items ={[
    {value: '1', title: 'London'},
    {value: '2', title: 'Paris'},
    {value: '3', title: 'Warszava'}  
]}/>


</>
};

export const BaseExampleWithoutValue = () => {
    const [value, setValue] = useState(null)
   
 return   <>
 
 <SelectDimych onChange={setValue}
  value={value}
   items ={[
    {value: '1', title: 'Kyiv'},
    {value: '2', title: 'Kharkiv'},
    {value: '3', title: 'Poltava'}  
]}/>

</>
};

