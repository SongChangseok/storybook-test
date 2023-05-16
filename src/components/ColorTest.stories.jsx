import theme from "../theme";
import ColorTest from "./ColorTest";

export default {
  title: "ColorTest",
  component: ColorTest,
  argTypes: {
    variant: {
      type: "select",
      options: Object.keys(theme),
    },
  },
};

const Template = (args) => <ColorTest {...args} />;

export const Default = Template.bind({});
