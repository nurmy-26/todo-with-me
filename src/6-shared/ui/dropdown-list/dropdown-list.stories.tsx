import type { Meta, StoryObj } from '@storybook/react';
import DropdownList from '.';

const meta = {
  title: 'UI/DropdownList',
  component: DropdownList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof DropdownList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    list: [
      <span>Пункт 1</span>,
      <span>Пункт 2</span>,
      <span>Пункт 3</span>
    ]
  },
};