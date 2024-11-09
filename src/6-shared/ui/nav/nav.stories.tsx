import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Nav from ".";
import { NavProps } from "./types";
import { ThemeSidebar } from "../../../4-features";

const mockNavList = [
  { title: 'Home', path: '/' },
  { title: 'Route-1', path: '/route-1' },
  { title: 'Route-2', path: '/route-2' },
];

const meta: Meta<NavProps> = {
  title: "UI/Nav",
  component: Nav,
  tags: ["autodocs"],
  argTypes: {
  },
  args: {},
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          width: '600px',
          padding: '40px',
          border: '1px solid lightgrey',
        }}
      >
        <MemoryRouter
          // ['/', '/route-1', '/route-2']
          initialEntries={mockNavList.map(item => item.path)}
          initialIndex={1}
        >
          <ThemeSidebar />
          <Story />

          <Routes>
            <Route path='/' element={<div>Вы на домашней странице</div>} />
            <Route
              path='/route-1'
              element={<div>Вы на странице Route-1</div>}
            />
            <Route
              path='/route-2'
              element={<div>Вы на странице Route-2</div>}
            />
          </Routes>
        </MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navList: mockNavList,
  },
};

export const Vertical: Story = {
  args: {
    navList: mockNavList,
    type: 'vertical'
  },
};

export const VerticalWithPaw: Story = {
  args: {
    navList: mockNavList,
    type: 'vertical',
    hasPaw: true
  },
};

