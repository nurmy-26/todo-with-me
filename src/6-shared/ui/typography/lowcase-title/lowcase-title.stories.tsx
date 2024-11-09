import type { Meta, StoryObj } from "@storybook/react";
import LowcaseTitle from ".";

const meta = {
  title: "UI/Typography/LowcaseTitle",
  component: LowcaseTitle,
  tags: ["autodocs"],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof LowcaseTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet'
  },
};

export const WithDarkOverlay: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    titleOverlay: 'dark'
  },
};

export const WithLightOverlay: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    titleOverlay: 'light'
  },
};

export const H2: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    titleOverlay: 'light',
    type: 'h2'
  },
};
