import { useState, useRef, ChangeEvent } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "input",
};

export const UncontrolledInput = () => <input />;
export const TrackValueuncontrolledInput = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        onChange={(event) => {
          const actualValue = event.currentTarget.value;
          setValue(actualValue);
        }}
      />{" "}
      - {value}{" "}
    </>
  );
};

export const GetValueuncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={save}>save</button> - {value}{" "}
    </>
  );
};
export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");

  return (
    <input
      value={parentValue}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
      }}
    />
  );
};

export const ControlledCheckBox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)}
  return (
    <input
      type="checkBox"
      checked = {parentValue}
      onChange={
       onChange}
    />
  );
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('2');
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)}
  return <select value={parentValue} onChange={onChange}>
    <option value={'1'}>first</option>
    <option value={'2'}>second</option>
    <option value={'3'}>third</option>
  </select>
  
  
};