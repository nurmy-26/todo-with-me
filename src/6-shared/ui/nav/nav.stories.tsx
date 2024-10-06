import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
import { routes } from '../../const/routes';
import Nav from ".";
import { NavProps } from "./types";

const meta: Meta<NavProps> = {
  title: "UI/Nav",
  component: Nav,
  tags: ["autodocs"],
  argTypes: {
  },
  args: {},
  decorators: (Story) => (
    <div style={{ width: '400px', padding: '40px' }}>
      <Story />
    </div>
  )
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <MemoryRouter>
      <Nav {...args} />
    </MemoryRouter>
  ),
  args: {
    navList: [
      { title: 'Home', path: routes.home },
      { title: 'Todo List', path: routes.todolist },
      { title: 'Delete', path: routes.delete },
    ],
  },
};

export const Vertical: Story = {
  render: (args) => (
    <MemoryRouter>
      <Nav {...args} />
    </MemoryRouter>
  ),
  args: {
    navList: [
      { title: 'Home', path: routes.home },
      { title: 'Todo List', path: routes.todolist },
      { title: 'Delete', path: routes.delete },
    ],
    type: 'vertical'
  },
};

export const VerticalWithPaw: Story = {
  render: (args) => (
    <MemoryRouter>
      <Nav {...args} />
    </MemoryRouter>
  ),
  args: {
    navList: [
      { title: 'Home', path: routes.home },
      { title: 'Todo List', path: routes.todolist },
      { title: 'Delete', path: routes.delete },
    ],
    type: 'vertical',
    hasPaw: true
  },
};

