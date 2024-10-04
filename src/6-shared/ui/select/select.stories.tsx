import type { Meta, StoryObj } from '@storybook/react';
import Select from '.';
import { ChangeEvent, useState } from 'react';

// моковый компонент для использования useState
const SelectStory = () => {
  const [selected, setSelected] = useState('Пункт 1');

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
  };

  return (
    <Select
      name='list-name'
      value={selected}
      options={['Пункт 1', 'Пункт 2', 'Пункт 3']}
      onChange={handleSelect}
    />
  );
};

const meta: Meta<typeof SelectStory> = {
  title: 'UI/Select',
  component: SelectStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectStory>;

export const Default: Story = {};