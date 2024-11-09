import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FilterIcon } from "./filter-icon";

const meta = {
  title: "icons/filter-icon",
  component: FilterIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FilterIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

export const Custom: Story = {
  args: {
    fill: "var(--color-accent)",
  },
};