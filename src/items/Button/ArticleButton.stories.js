import { ArticleButton } from "./ArticleButton";

export default {
  title: "ArticleButton",
  tags: ["autodocs"],
  component: ArticleButton,
  argTypes: {
    $backgroundColor: {
      control: "color",
    },
  },
};

export const BasicArticleButton = {
  args: {
    title: "에어팟맥스",
    contents: `나이키 덩크 레트로 흰검`,
  },
};
