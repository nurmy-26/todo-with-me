import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TodoRemoveBtn from './';

const meta = {
  title: 'Features/TodoRemoveBtn',
  component: TodoRemoveBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof TodoRemoveBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
