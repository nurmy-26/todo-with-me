import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ExpandableInput from './';
import { TrashIcon } from '../icons/trash-icon';
import { XMarkIcon } from '../icons/xmark-icon';

const meta = {
  title: 'UI/ExpandableInput',
  component: ExpandableInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // extraClass, icon = <PlusIcon />, type = 'text', name, placeholder, value, disabled, onChange
  },
  args: { onChange: fn() },
} satisfies Meta<typeof ExpandableInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'new-todo',
    placeholder: 'Добавить в список...'
  },
};

export const WithCustomIcons: Story = {
  args: {
    baseIcon: <TrashIcon />,
    altIcon: <XMarkIcon />,
    name: 'new-todo',
    placeholder: 'Добавить в список...'
  },
};