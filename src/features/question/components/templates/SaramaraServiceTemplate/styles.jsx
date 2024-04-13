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
  margin-bottom: 70px;
  padding: 56px 12px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 4px 24px 0px ${({ $type }) => ($type === 'sara' ? 'rgba(0, 123, 237, 0.1)' : 'rgba(239, 43, 0, 0.1)')};
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
    width: 363px;
    padding: 32px 16px 16px;

    /* max-width: 363px; */
  }
`;

export default StyledSaramaraServiceTemplate;
