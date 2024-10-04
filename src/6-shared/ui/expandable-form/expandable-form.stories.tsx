import type { Meta, StoryObj } from '@storybook/react';
import ExpandableForm from '.';
import { TrashIcon } from '../icons/trash-icon';
import { XMarkIcon } from '../icons/xmark-icon';

const meta = {
  title: 'UI/ExpandableForm',
  component: ExpandableForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof ExpandableForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'new-todo',
    placeholder: 'Добавить в список...',
    submitCallback: () => new Promise((resolve) => setTimeout(resolve, 2000))
  },
};

export const WithCustomIcons: Story = {
  args: {
    baseIcon: <TrashIcon />,
    altIcon: <XMarkIcon />,
    name: 'new-todo',
    placeholder: 'Добавить в список...',
    submitCallback: () => new Promise((resolve) => setTimeout(resolve, 2000))
  },
};