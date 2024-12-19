// Replace your-framework with the name of your framework
import type { Meta } from "@storybook/react";

import Accordion, { Accordion1 } from "./Accordion";
import { useState } from "react";
import { StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
  args: {
    name: "story",

    changeCollapsed: (): void => {},
    collapsed: true,
  },
};

const OnChangeHandler = action("onChange");

export const CollapsedAcoerdion = () => {
  return (
    <Accordion
      name={"Collapsed Accordion"}
      changeCollapsed={OnChangeHandler}
      collapsed={true}
      items={[]}
      onClick={onClickCallback}
    />
  );
};

const onClickCallback = action("try");

export const OpenAcoerdion = () => {
  return (
    <Accordion
      onClick={onClickCallback}
      name={"Open Accordion"}
      changeCollapsed={() => {}}
      collapsed={false}
      items={[
        { title: "a", value: 1 },
        { title: "b", value: 2 },
        { title: "c", value: 3 },
        { title: "c", value: 4 },
      ]}
    />
  );
};

export const UnControledAcoerdion = () => {
  const [collapsed, setColspsed] = useState(true);
  return (
    <Accordion
      name={"Open Accordion"}
      onClick={onClickCallback}
      changeCollapsed={() => {
        setColspsed(!collapsed);
      }}
      collapsed={collapsed}
      items={[
        { title: "a", value: 1 },
        { title: "b", value: 2 },
        { title: "c", value: 3 },
        { title: "c", value: 4 },
      ]}
    />
  );
};

export const UncontroledAcoerdion1 = () => {
  const [collapsed, setColspsed] = useState(true);
  return (
    <Accordion1
      name={"UncontroledAccordion1"}
      onClick={onClickCallback}
      changeCollapsed={() => {
        setColspsed(!collapsed);
      }}
      collapsed={collapsed}
      items={[
        { title: "a", value: 1 },
        { title: "b", value: 2 },
        { title: "c", value: 3 },
        { title: "c", value: 4 },
      ]}
    />
  );
};