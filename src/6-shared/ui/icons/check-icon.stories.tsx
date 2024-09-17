import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CheckIcon } from "./check-icon";

const meta = {
  title: "icons/check-icon",
  component: CheckIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CheckIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultEmpty: Story = {
  args: {
    type: "empty-white",
  },
};

export const WhiteCheckedCircle: Story = {
  args: {
    type: "white-circle",
  },
};

export const BlackCheckedCircle: Story = {
  args: {
    type: "black-circle",
  },
};

export const WhiteCheckedRectangle: Story = {
  args: {
    type: "white-rectangle",
  },
};

export const BlackCheckedRectangle: Story = {
  args: {
    type: "black-rectangle",
  },
};

export const BlackEmpty: Story = {
  args: {
    type: "empty-black",
  },
};

export const Custom: Story = {
  args: {
    fill: "var(--color-accent)",
  },
};
