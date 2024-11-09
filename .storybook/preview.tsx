import React from "react";
import { Provider } from 'react-redux';
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { store } from "../src/1-app/store";
import { handlers } from "../src/6-shared/config/msw/handlers";
import { MY_VIEWPORTS } from "../src/6-shared/config/storybook/viewports";
import "../src/1-app/index.css";

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // задаем свои варианты разрешений для просмотра через панель Storybook
    viewport: {
      viewports: MY_VIEWPORTS
    },
    msw: {
      // msw будет перехватывать все запросы, прописанные в handlers
      handlers: handlers
    },
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],

  // общий декоратор для всех историй
  decorators: [(story) => <Provider store={store}>{story()}</Provider>]
};

export default preview;
