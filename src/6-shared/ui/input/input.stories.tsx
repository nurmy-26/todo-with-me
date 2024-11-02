import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'search',
    placeholder: "Поиск"
  },
};

export const LongString: Story = {
  args: {
    name: 'list-title',
    placeholder: "Введите название списка..."
  },
};

export const WithError: Story = {
  args: {
    name: 'search',
    placeholder: "Поиск",
    error: "Поиск не выполнен!"
  },
};
