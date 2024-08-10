import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TodoCardDetails from ".";

const meta = {
  title: "todo/todo-card-details",
  component: TodoCardDetails,
  tags: ["autodocs"],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TodoCardDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Очень важный список",
    listId: "001"
  },
};