import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SwitchIcon } from "./switch-icon";

const meta = {
  title: "icons/switch-icon",
  component: SwitchIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SwitchIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

export const Checked: Story = {
  args: {
    type: 'right',
  },
};

export const Custom: Story = {
  args: {
    fill: "var(--color-accent)",
  },
};