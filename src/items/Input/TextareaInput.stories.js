import { useInput } from "../../hooks/hooks";
import { TextareaInput } from "./Input";

export default {
  title: "Input",
  tags: ["autodocs"],
  component: TextareaInput,
  argTypes: {
    value: {
      control: false,
    },
  },
};

export const BasicTextareaInput = (arg) => {
  const [value, setValue] = useInput(
    "벌써 세 번 잃어버렸는데, 이번에 사면 또 잃어버릴 것 같아서 못 사겠어..."
  );
  return <TextareaInput size={arg.size} value={value} onChange={setValue} />;
};
