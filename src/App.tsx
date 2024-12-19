import Accordion from "./Components/Accordion/Accordion";
import Example from "./Components/Example/Example";
import Example2 from "./Components/Example2/Example2";
import { OnOff } from "./Components/OnOff/OnOff";
import { ExampleControlled } from "./Components/Example/Example";
import { useState } from "react";
import { raitingValueType } from "./Components/Example/Example";

// Занятие первое: типизация элементов
let b: Array<string | number>;
b = [1, 2, 3, 4, 5];
b = ["d", "d", "dfd"];

function App() {
  let [raitingValue, setRaitingValue] = useState<raitingValueType>(0);
  let [collapsed, changeCollapsed] = useState(false);
  let [on, setOn] = useState(false)

  return (
    <div>
      {/* <Example2 title={'This is page title'}/> */}
      {/* <Accordion
        name={"Lord of The Ring"}
  
        changeCollapsed={changeCollapsed}
        collapsed={collapsed}
      />
      <Accordion
        name={"Game of the Throne"}

        changeCollapsed={changeCollapsed}
        collapsed={collapsed}
      /> */}
      <Example value={1} onClick={setRaitingValue}/>
      <Example value={1} onClick={setRaitingValue}/>
      <Example value={2} onClick={setRaitingValue}/>
      <Example value={4} onClick={setRaitingValue}/>
      <Example value={5} onClick={setRaitingValue}/>
      <br></br>
      <ExampleControlled value={raitingValue} onClick={setRaitingValue} />
      <ExampleControlled value={raitingValue} onClick={setRaitingValue} />
      <ExampleControlled value={raitingValue} onClick={setRaitingValue} />
      <ExampleControlled value={raitingValue} onClick={setRaitingValue} />
      <ExampleControlled value={raitingValue} onClick={setRaitingValue} />

      <OnOff on={on} setOn={setOn}/>
      <OnOff on={on} setOn={setOn}/>
      <OnOff on={on} setOn={setOn}/>
    </div>
  );
}

// Занятие второе: Компоненты

export default App;
