import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { RadioIcon } from "./radio-icon";

const meta = {
  title: "icons/radio-icon",
  component: RadioIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof RadioIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

export const Checked: Story = {
  args: {
    type: 'fullfilled',
  },
};

export const Custom: Story = {
  args: {
    fill: "var(--color-accent)",
  },
};