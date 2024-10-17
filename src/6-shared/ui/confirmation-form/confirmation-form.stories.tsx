import type { Meta, StoryObj } from "@storybook/react";
import ConfirmationForm from ".";
import Button from "../button";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const mockAction = async (event: React.FormEvent<Element>): Promise<void> => {
  event.preventDefault();
  alert('Действие совершено!');
};
const mockData = {
  actionText: 'удалить',
  subjectText: 'Невероятно важный список',
  submitButton: <Button type="submit" onClick={mockAction}>Удалить</Button>,
  handleDelete: mockAction,
}

const meta = {
  title: "UI/ConfirmationForm",
  component: ConfirmationForm,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/cancel', '/confirm']} initialIndex={1}>
        <Routes>
          <Route path='/cancel' element={<div>Вы отменили действие и вернулись на предыдущую страницу.</div>} />
          <Route path='/confirm' element={
            <Story />
          } />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ConfirmationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actionText: 'вывести предупреждение',
    submitButton: <Button type="submit" onClick={mockAction}>Вывести предупреждение</Button>,
    handleDelete: mockAction,
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
    actionText: mockData.actionText,
    submitButton: mockData.submitButton,
    handleDelete: mockAction,
  },
};

export const WithSubject: Story = {
  args: {
    actionText: mockData.actionText,
    subjectText: mockData.subjectText,
    submitButton: mockData.submitButton,
    handleDelete: mockAction,
  },
};

export const WithAccent: Story = {
  args: {
    hasAccent: true,
    actionText: mockData.actionText,
    subjectText: mockData.subjectText,
    submitButton: mockData.submitButton,
    handleDelete: mockAction,
  },
};

export const InContainer: Story = {
  args: {
    actionText: mockData.actionText,
    subjectText: mockData.subjectText,
    submitButton: mockData.submitButton,
    handleDelete: mockAction,
  },
  decorators: [(Story) => (
    <div style={{ margin: 'auto', padding: '2.5rem 3.75rem', border: '1px solid black', borderRadius: '20px', width: '720px' }}>
      <Story />
    </div>
  )]
};