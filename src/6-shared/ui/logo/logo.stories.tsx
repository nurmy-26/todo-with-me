import type { Meta, StoryObj } from "@storybook/react";
import Logo from ".";

const meta = {
  title: "UI/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

const withBackground = (StoryComponent: any, context: any) => {
  let backgroundColor;

  switch (context.name) {
    case 'Dark':
      backgroundColor = 'var(--color-text-dark)' || 'black';
      break;
    case 'Light':
      backgroundColor = 'var(--color-light)' || 'white';
      break;
    default:
      backgroundColor = 'transparent'; // или любой другой цвет по умолчанию
  }

  return (
    <div style={{ backgroundColor, padding: '20px' }}>
      <StoryComponent />
    </div>
  );
};

export const Default: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [withBackground],
};

export const Light: Story = {
  args: {},
  decorators: [withBackground],
};