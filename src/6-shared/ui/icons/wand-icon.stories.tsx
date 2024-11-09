import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { WandIcon } from "./wand-icon";

const meta = {
  title: "icons/wand-icon",
  component: WandIcon,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof WandIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'magic',
  },
};

export const Usual: Story = {
  args: {
    type: 'usual',
  },
};

export const Custom: Story = {
  args: {
    fill: "var(--color-accent)",
  },
};