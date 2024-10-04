import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ThemeSidebar from ".";
import { todolistsApi } from "../../../../6-shared/api/todolists";
import { settingsApi } from "../../../../6-shared/api/settings";

// todo - заменить на реально моковый store (сейчас меняется состояние в реальном)
const mockStore = configureStore({
  reducer: {
    [todolistsApi.reducerPath]: todolistsApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(todolistsApi.middleware)
      .concat(settingsApi.middleware),
});

// метаданные истории
const meta: Meta<typeof ThemeSidebar> = {
  title: 'features/ThemeSidebar',
  component: ThemeSidebar,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Provider store={mockStore}>
      <ThemeSidebar />
    </Provider>
  ),
};