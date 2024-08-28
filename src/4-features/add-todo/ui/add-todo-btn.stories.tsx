import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TodoAddBtn from './';

const meta = {
  title: 'Features/TodoAddBtn',
  component: TodoAddBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof TodoAddBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
