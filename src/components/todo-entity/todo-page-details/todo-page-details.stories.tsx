import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TodoPageDetails from ".";

const meta = {
  title: "todo/todo-page-details",
  component: TodoPageDetails,
  tags: ["autodocs"],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TodoPageDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};