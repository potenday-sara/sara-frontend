import styled from 'styled-components';

const StyledCoupoangRecommend = styled.section`
  width: 100%;
  position: relative;
  background-color: white;
  margin-right: auto;
  border-radius: 24px;
  max-width: 394px;
  height: 715px;
  padding: 0px 16px 20px;

  .bottom {
    width: 100%;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: rgba(0, 123, 237, 0.05);
    left: 0px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    bottom: 0px;
    p {
      font-size: 10px !important;
    }
  }
`;

export default StyledCoupoangRecommend;
