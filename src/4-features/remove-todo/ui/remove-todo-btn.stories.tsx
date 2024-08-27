import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import RemoveTodoBtn from './';

const meta = {
  title: 'Features/RemoveTodoBtn',
  component: RemoveTodoBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof RemoveTodoBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
