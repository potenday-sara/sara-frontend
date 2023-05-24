import { useInput } from "../../hooks/hooks";
import { TextInput } from "./Input";

export default {
  title: "Input",
  tags: ["autodocs"],
  component: TextInput,
  argTypes: {
    value: {
      control: false,
    },
  },
};

export const BasicTextInput = (args) => {
  const [value, setValue] = useInput("블루투스 이어폰");
  return <TextInput size={args.size} value={value} onChange={setValue} />;
};

// export const BasicTextInput = BasicTextInputComp.bind({});
// BasicTextInput.args = {
//   size: "small",
// };
