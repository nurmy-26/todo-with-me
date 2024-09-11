import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PaperPlaneIcon } from "./paper-plane-icon";

const meta = {
  title: "icons/paper-plane-icon",
  component: PaperPlaneIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PaperPlaneIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDark: false,
  },
};

export const Dark: Story = {
  args: {
    isDark: true,
  },
};

export const Custom: Story = {
  args: {
    fill: "var(--color-accent)",
  },
};