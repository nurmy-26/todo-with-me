import type { Meta, StoryObj } from "@storybook/react";
import LogoText from ".";
import { ThemeSidebar } from "../../../../4-features";

const meta = {
  title: "UI/Logo/LogoText",
  component: LogoText,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LogoText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Line: Story = {
  args: {
    type: 'line'
  },
};

export const Square: Story = {
  args: {
    type: 'square'
  },
};

export const Themes: Story = {
  args: {},
  decorators: [(Story) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'start' }}>
      <ThemeSidebar />
      <Story />
    </div>
  )]
};

export const DifferentWidths = () => (
  <div>
    <p>width: '550px' (line, square, adaptive)</p>
    <div style={{ width: '550px', border: '1px solid var(--color-text-primary)' }}>
      <LogoText type={'line'} />
      <LogoText type={'square'} />
      <LogoText type={'adaptive'} />
    </div>

    <p>width: '320px' (line - не влезает меньше чем в 340px на десктопе, square, adaptive)</p>
    <div style={{ width: '320px', border: '1px solid var(--color-text-primary)' }}>
      <LogoText type={'line'} />
      <LogoText type={'square'} />
      <LogoText type={'adaptive'} />
    </div>
  </div>
);