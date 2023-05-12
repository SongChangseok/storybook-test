import "../src/index.css";

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
