import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TodoToggleCheckbox from './';

const meta = {
  title: 'Features/TodoToggleCheckbox',
  component: TodoToggleCheckbox,
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof TodoToggleCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      id: '01',
      title: 'Todo 1',
      isDone: false,
    }
  },
};

export const IsDone: Story = {
  args: {
    item: {
      id: '02',
      title: 'Todo 2',
      isDone: true,
    }
  },
};
