import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { LoadingIcon } from "./loading-icon";

const meta = {
  title: "icons/loading-icon",
  component: LoadingIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof LoadingIcon>;

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