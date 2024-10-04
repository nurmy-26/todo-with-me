import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ThemeToggler from ".";

const meta = {
  title: "features/ThemeToggler",
  component: ThemeToggler,
  tags: ["autodocs"],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ThemeToggler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  },
};