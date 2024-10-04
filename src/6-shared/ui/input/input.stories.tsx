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
    name: 'list-name',
    placeholder: "Придумайте название списка..."
  },
};

export const InFlexDiv: Story = {
  args: {
    name: 'list-name',
    placeholder: "Придумайте название списка..."
  },
  decorators: (Story) =>
    <div style={{ width: '800px', display: 'flex' }}><Story /></div>

};