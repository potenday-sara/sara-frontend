import { styled } from "styled-components";
import { BasicText } from "../../../components/Text/Text";
import image from "../assets/temp/buds.jpg";
import rocket from "../assets/temp/rocket.jpg";

const StyledTrendItem = styled.div`
  width: 175px;
  height: 272px;
  border-radius: 12px;
  padding: 12px;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;
  gap: 10px;
  .image {
    width: 151px;
    height: 151px;
    background-size: cover;
  }

  .contents {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
`;

export default function TrendItem() {
  return (
    <StyledTrendItem>
      <div className="image">
        <img src={image} alt="..." />
      </div>
      <div className="contents">
        <BasicText label={"삼성전자 갤럭시 버즈"} $customColor={"#666"} />
        <BasicText label={"224,000원"} $color={"gray"} />
        <img src={rocket} alt="..." width={"80px"} />
      </div>
    </StyledTrendItem>
  );
}
