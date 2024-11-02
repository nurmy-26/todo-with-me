import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SortIcon } from "./sort-icon";

const meta = {
  title: "icons/sort-icon",
  component: SortIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SortIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAsc: Story = {
  args: {
  },
};

export const Desc: Story = {
  args: {
    type: 'desc',
  },
};

export const ArrowAsc: Story = {
  args: {
    type: 'arrow-asc',
  },
};

export const ArrowDesc: Story = {
  args: {
    type: 'arrow-desc',
  },
};

export const Abc: Story = {
  args: {
    type: 'abc',
  },
};

export const Check: Story = {
  args: {
    type: 'check',
  },
};

export const Calendar: Story = {
  args: {
    type: 'calendar',
  },
};

export const Custom: Story = {
  args: {
    fill: "var(--color-accent)",
  },
};