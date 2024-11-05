import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TrashIcon } from "./trash-icon";

const meta = {
  title: "icons/trash-icon",
  component: TrashIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TrashIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'light',
  },
};

export const Dark: Story = {
  args: {
    type: 'dark',
  },
};

export const Fillfilled: Story = {
  args: {
    type: 'fullfilled',
  },
};

export const Custom: Story = {
  args: {
    fill: "var(--color-accent)",
  },
};