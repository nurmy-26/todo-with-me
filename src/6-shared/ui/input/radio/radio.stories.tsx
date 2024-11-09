import { ChangeEvent, ReactNode, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Radio from '.';


const mockData = {
  name: '062f61cf',
  value: 'Пункт списка',
  isChecked: false,
  handleChange: fn(),
}

type RadioProps = {
  name: string;
  label?: ReactNode;
  value: string;
  isChecked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  extraClass?: string;
};

const RadioWrapper = ({ name, label, value, isChecked, handleChange }: RadioProps) => {
  const [isCheckedState, setIsChecked] = useState(isChecked);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (handleChange) {
      handleChange(event);
    }
  };

  return (
    <Radio
      name={name}
      label={label}
      value={value}
      isChecked={isCheckedState}
      handleChange={handleRadioChange}
    />
  );
};

const meta = {
  title: 'UI/Radio',
  component: RadioWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof Radio>;

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

export const Checked: Story = {
  args: {
    name: mockData.name,
    value: mockData.value,
    isChecked: true,
    handleChange: mockData.handleChange,
  },
};

export const WithLabel: Story = {
  args: {
    name: mockData.name,
    label: 'Некий параметр',
    value: mockData.value,
    isChecked: mockData.isChecked,
    handleChange: mockData.handleChange,
  }
};