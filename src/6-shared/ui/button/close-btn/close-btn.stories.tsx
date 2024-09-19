import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CloseBtn from '.';

const meta = {
  title: 'UI/Button/CloseBtn',
  component: CloseBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof CloseBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
