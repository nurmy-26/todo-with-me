import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CreateListBtn from './';

const meta = {
  title: 'Features/CreateListBtn',
  component: CreateListBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof CreateListBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
