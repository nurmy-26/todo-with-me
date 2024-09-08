import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './';
import { PlusIcon } from '../icons/plus-icon';
import { ListIcon } from '../icons/list-icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // children, disabled, extraClass, icon, type = 'button', size, variant
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Кнопка',
    variant: 'secondary'
  },
};

export const Primary: Story = {
  args: {
    children: 'Кнопка',
    variant: 'primary'
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Кнопка',
    variant: 'tertiary'
  },
};

export const WithIcon: Story = {
  args: {
    icon: <PlusIcon />
  },
};

export const WithIconSizeS: Story = {
  args: {
    icon: <PlusIcon />,
    size: 's'
  },
};

export const Disabled: Story = {
  args: {
    children: 'Кнопка',
    disabled: true,
    icon: <ListIcon />
  },
};