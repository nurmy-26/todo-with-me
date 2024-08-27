import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AddTodoBtn from './';

const meta = {
  title: 'Features/AddTodoBtn',
  component: AddTodoBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof AddTodoBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
