import type { Meta, StoryObj } from "@storybook/react";
import MainLogo from ".";

const meta = {
  title: "UI/MainLogo",
  component: MainLogo,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MainLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};