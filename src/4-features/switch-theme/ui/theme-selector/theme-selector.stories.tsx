import type { Meta, StoryObj } from "@storybook/react";
import ThemeSelector from ".";

const meta: Meta<typeof ThemeSelector> = {
  title: 'features/ThemeSelector',
  component: ThemeSelector,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};