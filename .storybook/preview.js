/** @type { import('@storybook/react').Preview } */

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { GlobalStyles } from "../src/Styles";
import { QueryClient, QueryClientProvider } from "react-query";

const customViewports = {
  small: {
    name: "small",
    styles: {
      width: "533px",
      height: "801px",
    },
  },

  big: {
    name: "big",
    styles: {
      width: "1200px",
      height: "700px",
    },
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { viewports: customViewports },
    layout: "fullscreen",
  },
};

const queryClient = new QueryClient();
export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
];

export default preview;
