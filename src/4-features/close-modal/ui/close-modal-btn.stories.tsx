import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CloseModalBtn from '.';

const meta = {
  title: 'Features/CloseModalBtn',
  component: CloseModalBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof CloseModalBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
