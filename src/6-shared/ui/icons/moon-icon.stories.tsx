import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MoonIcon } from "./moon-icon";

const meta = {
  title: "icons/moon-icon",
  component: MoonIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof MoonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDark: false,
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