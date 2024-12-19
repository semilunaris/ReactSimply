import { useEffect } from "react";
import { useState } from "react";
import type { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

export const ResetEffect = () => {
  const [counter, setCounter] = useState(1);


  console.log("Component rendered");

  useEffect(() => {
      console.log("Effect occured"+counter);

      return() => {
        console.log('resetEffect'+counter)
      }
},[counter])

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <>this is counter
      <button
        onClick={increase}
        
      >
        +
      </button>
    </>
  );
};


// Компонент KeysTracker
export const KeysTracker = () => {
    const [text, setText] = useState('');
  
    console.log("Компонент отрендерен с текстом: " + text);
  
    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        console.log(e.code);
        setText((state) => state + e.key); // Используем prevText для корректного обновления
      };
  
      window.document.addEventListener('keypress', handleKeyPress);
  
      // Очистка события при размонтировании компонента
      return () => {
        window.document.removeEventListener('keypress', handleKeyPress);
      };
    }, [text]); // Пустой массив зависимостей, чтобы эффект сработал только один раз при монтировании компонента
  
    return (
      <>
        Напечатанный текст: {text}
      </>
    );
  };
  
  
  export const SetTimeoutEx = () => {
    const [text, setText] = useState('');
  
    console.log("Компонент отрендерен с текстом: " + text);
  
    useEffect(() => {
      const timeoutId = setTimeout(()=>{
        setText('3 seconds passed')
       }, 3000)
       return() =>{
 clearTimeout(timeoutId)
       }
    },[text])
    return   <>
    текст: {text}
      </>

  };

  // Meta-описание для Storybook
  const meta: Meta<typeof ResetEffect> = {
    component: ResetEffect,
  };
  
  export default meta;
  type Story = StoryObj<typeof ResetEffect>;
  export const FirstStory: Story = {
    args: {},
  };