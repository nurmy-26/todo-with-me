import { useState } from "react";
import type { Meta } from "@storybook/react";
import SwitchBtn from ".";
import { SwitchIcon } from "../../icons/switch-icon";
import { SortIcon } from "../../icons/sort-icon";

const meta = {
  title: 'UI/Button/SwitchBtn',
  component: SwitchBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof SwitchBtn>;

export default meta;

export const Default = () => {
  const [sort, setSort] = useState('asc');

  const switchBtnOptions = [
    {
      icon: <SwitchIcon type='left' />,
      label: <SortIcon type='asc' />,
      conditionName: 'asc',
    },
    {
      icon: <SwitchIcon type='right' />,
      label: <SortIcon type='desc' />,
      conditionName: 'desc',
    }
  ];

  const toggle = () => {
    setSort(sort === 'asc' ? 'desc' : 'asc')
  };

  return (
    <SwitchBtn
      options={switchBtnOptions}
      sortName={sort}
      onToggle={toggle}
    />
  );
};

export const AscDesc = () => {
  const [sort, setSort] = useState('asc');

  const switchBtnOptions = [
    {
      icon: <SwitchIcon type='left' />,
      label: 'A-Z',
      conditionName: 'asc',
    },
    {
      icon: <SwitchIcon type='right' />,
      label: 'Z-A',
      conditionName: 'desc',
    }
  ];

  const toggle = () => {
    setSort(sort === 'asc' ? 'desc' : 'asc')
  };

  return (
    <SwitchBtn
      options={switchBtnOptions}
      sortName={sort}
      onToggle={toggle}
    />
  );
};