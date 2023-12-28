import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledSaramaraServiceTemplate = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  z-index: 10;
  height: auto;
  min-height: 400px;
  margin: auto;
  padding: 40px 24px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);

  .tag {
    background-color: red;

    left: 0px;
  }

  ${Theme.deviceSize.medium} {
    width: calc(352px + (100vw - 1440px) / (195 - 144) * 3.5);
    max-width: 395px;
  }
  ${Theme.deviceSize.large} {
    width: 395px;
  }
  ${Theme.deviceSize.small} {
    width: 352px;
  }
`;

export default StyledSaramaraServiceTemplate;
