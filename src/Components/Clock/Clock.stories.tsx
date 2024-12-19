// Replace your-framework with the name of your framework
import type { Meta } from "@storybook/react";

import { Clock } from "./Clock";
import { useState } from "react";
import { StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { string } from "prop-types";

const meta: Meta<typeof Clock> = {
  component: Clock,

};

export default meta;
type Story = StoryObj<typeof Clock>;

export const Digital: Story = {
 args: {mode: 'digital'
}
};

export const Analog: Story = {
  args: {mode: 'analog'
}
};


