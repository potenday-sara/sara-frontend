/** @type { import('@storybook/react').Preview } */

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { GlobalStyles } from "../src/Styles";

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
      width: "1024px",
      height: "900px",
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

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];

export default preview;
