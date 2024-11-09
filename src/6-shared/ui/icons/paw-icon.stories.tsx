import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PawIcon } from "./paw-icon";

const meta = {
  title: "icons/paw-icon",
  component: PawIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PawIcon>;

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

export const WithShadow: Story = {
  args: {
    fill: "var(--color-accent)",
    hasShadow: true
  },
};