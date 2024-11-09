import type { Meta, StoryObj } from "@storybook/react";
import LogoImage from ".";

const meta = {
  title: "UI/Logo/LogoImage",
  component: LogoImage,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LogoImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

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

export const DifferentWidths = () => (
  <div style={{ backgroundColor: 'lightgrey' }}>
    <p>Для этого изображения используется исходная картинка шириной 64px</p>
    <LogoImage width={'60px'} /> <span>width='60px'</span>

    <p>Для этого изображения используется исходная картинка шириной 200px</p>
    <LogoImage width={'160px'} /> <span>width='160px'</span>

    <p>Для этого изображения используется максимально большая исходная картинка</p>
    <LogoImage width={'500px'} /> <span>width='500px'</span>
  </div>
);

export const InSmallContainers: Story = {
  args: {},
  decorators: [
    (Story) => (
      <>
        <p>Без заданной ширины растягиваются на всю доступную ширину или высоту, сохраняя пропорции</p>
        <div style={{ display: 'flex', gap: '20px', backgroundColor: 'lightgrey' }}>
          <div style={{ border: '1px solid grey', width: '80px', height: '60px' }}><Story /></div>
          <div style={{ border: '1px solid grey', width: '200px', height: '300px' }}> <Story /></div >
          <div style={{ border: '1px solid grey', width: '500px', height: '300px' }}> <Story /></div >
        </div>
      </>
    )
  ],
};