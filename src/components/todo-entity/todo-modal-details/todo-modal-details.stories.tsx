import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TodoModalDetails from ".";

const meta = {
  title: "todo/todo-modal-details",
  component: TodoModalDetails,
  tags: ["autodocs"],
  argTypes: {

  },
  args: { onClick: fn() },
} satisfies Meta<typeof TodoModalDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};