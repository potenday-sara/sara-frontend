import { useInput } from "../../hooks/hooks";
import { TextInput } from "./Input";

export default {
  title: "Input",
  tags: ["autodocs"],
  component: TextInput,
};

export const BasicTextInput = () => {
  const [value, setValue] = useInput("블루투스 이어폰");
  return <TextInput size="small" value={value} onChange={setValue} />;
};
