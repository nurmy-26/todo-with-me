import type { Meta, StoryObj } from "@storybook/react";
import ThemeSidebar from ".";

const meta: Meta<typeof ThemeSidebar> = {
  title: 'features/ThemeSidebar',
  component: ThemeSidebar,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};