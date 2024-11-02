import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ListIcon } from "./list-icon";

const meta = {
  title: "icons/list-icon",
  component: ListIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ListIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

export const Custom: Story = {
  args: {
    fill: "var(--color-accent)",
  },
};