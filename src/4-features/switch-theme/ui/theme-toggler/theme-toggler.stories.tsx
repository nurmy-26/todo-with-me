import type { Meta, StoryObj } from "@storybook/react";
import ThemeToggler from ".";

// метаданные истории
const meta: Meta<typeof ThemeToggler> = {
  title: 'features/ThemeToggler',
  component: ThemeToggler,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};