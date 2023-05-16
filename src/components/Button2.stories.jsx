import { ThemeProvider } from "styled-components";
import Button from "./Button";
import theme from "../theme";

export default {
  title: "styled-button-2",
  component: Button,
  args: {
    children: "버튼",
  },
};

const decoratorsHelper = (theme) => (story) =>
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>;

export const Mint = {
  decorators: [decoratorsHelper(theme.mint)],
};
export const Dark = {
  decorators: [decoratorsHelper(theme.dark)],
};
export const Danger = {
  decorators: [decoratorsHelper(theme.danger)],
};
export const Pink = {
  decorators: [decoratorsHelper(theme.pink)],
};
