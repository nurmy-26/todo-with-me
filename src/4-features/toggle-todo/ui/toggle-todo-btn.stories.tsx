import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ToggleTodoBtn from './';

const meta = {
  title: 'Features/ToggleTodoBtn',
  component: ToggleTodoBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ToggleTodoBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
