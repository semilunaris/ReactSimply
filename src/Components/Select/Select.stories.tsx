import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { action } from "@storybook/addon-actions";
import { useState } from "react";


const meta: Meta<typeof Select> = {
    component: Select,
  };
  
  export default meta;
  type Story = StoryObj<typeof Select>;
 


export const SelectHandler = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [title, setTitle] = useState('Mood')

    

   return(
    <Select
        title = {title}
        items={[

          { mindState: 'Happy', collor: 'select-title title-happy'},
          { mindState: 'Blue', collor: 'select-title title-blue' },
          { mindState: 'Angry', collor: 'select-title title-angry'},
       
        ]}
        collapsed = {collapsed}  
        onClick={()=>{
           setCollapsed(!collapsed)
        }}
        changeTitle ={
        (value: any)=>{
            setTitle(value)
            setCollapsed(!collapsed)
        }
        }
      />
    
   )
      
  };