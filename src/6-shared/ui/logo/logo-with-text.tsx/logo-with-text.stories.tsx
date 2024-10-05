import type { Meta, StoryObj } from "@storybook/react";
import LogoWithText from ".";

const meta = {
  title: "UI/LogoWithText",
  component: LogoWithText,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LogoWithText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};