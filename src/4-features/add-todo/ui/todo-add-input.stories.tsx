import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TodoAddInput from './todo-add-input';

const meta = {
  title: 'Features/TodoAddInput',
  component: TodoAddInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof TodoAddInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
