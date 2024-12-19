// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/react';
 
import Example from './Example';
import { useState } from 'react';
import { StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'
 

 
export default {
title:'Example',
component: Example
}
 

export const EntyStars = () => <Example value={0} onClick ={()=>{}}/>
export const ChangeStars = () => {
   const [raiting, setRaiting] = useState(5)
    return <Example value={raiting} onClick ={setRaiting} />
}
