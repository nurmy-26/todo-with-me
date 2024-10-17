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

export const Default: Story = {
  args: {},
};

export const BothTypesTogether = () => (
  <div>
    <p>Дефолтный вариант</p>
    <Logo />

    <p>isAlwaysCompact: true</p>
    <Logo isAlwaysCompact />
  </div>
);

export const LightDark: Story = {
  args: {},
  decorators: [(Story) => (
    <div style={{ display: 'flex' }}>
      <div style={{ backgroundColor: 'var(--color-light)', color: 'var(--color-text-dark)', padding: '20px' }}>
        <p>Light</p>
        <Story />
      </div>

      <div style={{ backgroundColor: 'var(--color-text-dark)', color: 'var(--color-light)', padding: '20px' }}>
        <p>Dark</p>
        <Story />
      </div>
    </div>
  )]
};