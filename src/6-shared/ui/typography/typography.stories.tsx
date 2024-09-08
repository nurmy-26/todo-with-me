import type { Meta, StoryObj } from '@storybook/react';
import Typography from './';

const meta = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // hasMarginBottom, hasOverflow, children, extraClass, marginBottom, tag, type
  },
  args: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All = () => (
  <div>
    <Typography type='h1'>H1 Заголовок</Typography>
    <Typography type='h2'>H2 Заголовок</Typography>
    <Typography>Обычный текст</Typography>
  </div>
);

export const Text: Story = {
  args: {
    children: 'p Обычный текст',
  },
};

export const H1: Story = {
  args: {
    children: 'H1 Заголовок',
    type: 'h1'
  },
};
export const H2: Story = {
  args: {
    children: 'H2 Заголовок',
    type: 'h2'
  },
};

export const Margins = () => (
  <div style={{ backgroundColor: 'grey' }}>
    <Typography hasMarginBottom>С дефолтным отступом 40px</Typography>

    <Typography hasMarginBottom marginBottom='120px'>С кастомным отступом 120px</Typography>

    <Typography>Обычный текст</Typography>
  </div>
);
export const HasMarginBottom: Story = {
  args: {
    children: 'H1 Заголовок',
    hasMarginBottom: true,
  },
};
export const WithCustomMargin: Story = {
  args: {
    children: 'H1 Заголовок',
    hasMarginBottom: true,
    marginBottom: '120px'
  },
};

export const HasOverflow = () => (
  <div style={{ width: '200px', backgroundColor: 'grey' }}>
    <Typography hasOverflow>Обычный текст текст текст текст текст текст текст текст текст HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH11111111111111111111111111111111111111111111111111111</Typography>
  </div>
);

export const HasNoOverflow = () => (
  <div style={{ width: '200px', backgroundColor: 'grey' }}>
    <Typography>Обычный текст текст текст текст текст текст текст текст текст HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH11111111111111111111111111111111111111111111111111111</Typography>
  </div>
);

export const WithCustomTag: Story = {
  args: {
    children: 'H2 Заголовок, который выглядит как H1',
    type: 'h1',
    tag: 'h2'
  },
};