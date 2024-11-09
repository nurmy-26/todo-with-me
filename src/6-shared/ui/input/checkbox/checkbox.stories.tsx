import { ChangeEvent, ReactNode, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Checkbox from '.';


const mockData = {
  name: '062f61cf',
  value: 'Пункт списка',
  isChecked: false,
  handleChange: fn(),
}

type CheckboxProps = {
  name: string;
  label?: ReactNode;
  value: string;
  isChecked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: 'default' | 'paw';
  extraClass?: string;
};

const CheckboxWrapper = ({ name, label, value, isChecked, handleChange, type = 'paw' }: CheckboxProps) => {
  const [isCheckedState, setIsChecked] = useState(isChecked);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (handleChange) {
      handleChange(event);
    }
  };

  return (
    <Checkbox
      type={type}
      name={name}
      label={label}
      value={value}
      isChecked={isCheckedState}
      handleChange={handleCheckboxChange}
    />
  );
};

const meta = {
  title: 'UI/Checkbox',
  component: CheckboxWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: mockData.name,
    value: mockData.value,
    isChecked: mockData.isChecked,
    handleChange: mockData.handleChange,
  },
};

export const WithLabel: Story = {
  args: {
    name: mockData.name,
    label: 'Некий параметр',
    value: mockData.value,
    isChecked: true,
    handleChange: mockData.handleChange,
  }
};

export const Square: Story = {
  args: {
    type: 'default',
    name: mockData.name,
    value: mockData.value,
    isChecked: mockData.isChecked,
    handleChange: mockData.handleChange,
  }
};

export const SquareWithLabel: Story = {
  args: {
    type: 'default',
    name: mockData.name,
    label: 'Некий параметр',
    value: mockData.value,
    isChecked: true,
    handleChange: mockData.handleChange,
  }
};