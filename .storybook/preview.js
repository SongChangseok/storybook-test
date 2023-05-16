import { initialize, mswDecorator } from "msw-storybook-addon";
import "../src/index.css";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import theme from "../src/theme";
import { ThemeProvider } from "styled-components";

initialize();

export const decorators = [
  mswDecorator,
  withThemeFromJSXProvider({
    themes: theme,
    defaultTheme: "mint",
    Provider: ThemeProvider,
  }),
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// parameters는 스토리북의 기능과 애드온의 동작을 제어하기 위하여 사용된다.
export const parameters = {
  actions: { argTypesRegex: "^on[A-z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default preview;
