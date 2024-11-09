import type { Meta, StoryObj } from "@storybook/react";
import SkeletonLoaderCard from ".";

const meta = {
  title: "UI/SkeletonLoaderCard",
  component: SkeletonLoaderCard,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SkeletonLoaderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const InGridContainer: Story = {
  args: {},
  decorators: (Story) => <div style={{
    padding: '20px',
    width: '90vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px'
  }}>
    {Array.from({ length: 10 }).map((_, index) => <Story key={index} />)}
  </div>
}