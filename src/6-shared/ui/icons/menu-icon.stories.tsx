import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MenuIcon } from "./menu-icon";

const meta = {
  title: "icons/menu-icon",
  component: MenuIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof MenuIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultEllipsis: Story = {
  args: {
    type: "ellipsis-vertical",
  },
};

export const Ellipsis: Story = {
  args: {
    type: "ellipsis",
  },
};

export const Bars: Story = {
  args: {
    type: "bars",
  },
};

export const CircleChevronDown: Story = {
  args: {
    type: "circle-chevron-down",
  },
};

export const CircleCaretDown: Story = {
  args: {
    type: "square-caret-down",
  },
};

export const Custom: Story = {
  args: {
    fill: "var(--color-accent)",
  },
};

export const CaretUp: Story = {
  args: {
    type: "caret-up",
  },
};

export const CaretDown: Story = {
  args: {
    type: "caret-down",
  },
};

export const CaretLeft: Story = {
  args: {
    type: "caret-left",
  },
};

export const CaretRight: Story = {
  args: {
    type: "caret-right",
  },
};