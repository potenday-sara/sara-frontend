/** @type { import('@storybook/react').Preview } */

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { GlobalStyles } from "../src/Styles";
import { QueryClient, QueryClientProvider } from "react-query";

const customViewports = {
  default: {
    name: "default",
    styles: {
      width: "1250",
      height: "832px",
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
