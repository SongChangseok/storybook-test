import theme from "../theme";
import Select from "./Select";

export default {
  title: "StyledSelect",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: theme,
  onChange: ({ target: { value } }) => console.log(value),
};
