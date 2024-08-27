import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DeleteListBtn from './';

const meta = {
  title: 'Features/DeleteListBtn',
  component: DeleteListBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof DeleteListBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

export const SizeM: Story = {
  args: {
    size: 'm'
  },
};