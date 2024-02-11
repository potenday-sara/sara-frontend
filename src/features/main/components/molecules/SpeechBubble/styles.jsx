import styled, { css } from 'styled-components';
import { Theme } from '../../../../../Styles';

const getBubbleTypeStyle = ({ type }) => {
  return type === 'sara'
    ? css`
        padding: 32px;
        width: 352px;
        border-radius: 48px;
        @media screen and (${(props) => props.theme.desktopLarge}) {
          width: 479px;
        }

        &:after {
          right: 12%;
          border-left: 0px;
        }

        ${Theme.deviceSize.small} {
          /* height: 92px; */
          border-radius: 20px;
        }
      `
    : css`
        width: 390px;
        padding: 32px 24px;
        @media screen and (${(props) => props.theme.desktopLarge}) {
          width: 552px;
        }

        &:after {
          left: 12%;
          border-right: 0;
        }
        ${Theme.deviceSize.small} {
          /* height: 92px; */
          border-radius: 20px;
        }
      `;
};

const StyledTextbubble = styled.div`
  opacity: ${({ isNowType }) => (isNowType ? 1 : 0.35)};
  position: relative;
  height: 207px;
  z-index: 2;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 0.65);

  @media screen and (${(props) => props.theme.desktopLarge}) {
    height: 315px;
    padding: 40px 48px;
  }

  &:after {
    content: '';
    z-index: 2;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border: 29px solid transparent;
    border-top-color: rgba(255, 255, 255, 0.65);
    border-bottom: 0;
    margin-bottom: -28px;

    ${Theme.deviceSize.small} {
      border-width: 15px;
      margin-bottom: -15px;
    }
  }
  ${(props) => getBubbleTypeStyle(props)}

  ${Theme.deviceSize.small} {
    width: 60%;
    max-width: 440px;
    padding: 20px;
    height: auto;
    .sub-title,
    .caption {
      display: none;
    }
    .text {
      width: 100%;
      height: 100%;
    }
  }
`;

export default StyledTextbubble;
