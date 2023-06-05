import { MainArticle } from "../../items/MainArticle/MainArticle";

export default {
  title: "Develop System/Items/Article",
  tags: ["autodocs"],
  component: MainArticle,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const SaraArticle = {
  args: {
    $type: "sara",
    data: {
      image: "https://picsum.photos/200",
      title: "에어팟맥스",
      contents: "에어팟맥스",
    },
  },
};
export const MaraArticle = {
  args: {
    $type: "mara",
    data: {
      image: "https://picsum.photos/200",
      title: "에어팟맥스",
      contents: "에어팟맥스",
    },
  },
};
