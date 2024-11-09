import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SunIcon } from "./sun-icon";

const meta = {
  title: "icons/sun-icon",
  component: SunIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SunIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {
    isDark: true,
  },
};

export const Custom: Story = {
  args: {
    fill: "var(--color-accent)",
  },
};