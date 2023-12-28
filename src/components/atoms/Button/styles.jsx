import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledButton = styled.button`
  position: relative;
  width: ${({ w }) => w || '100%'};
  margin: ${({ m }) => m || null};
  background-color: ${({ bg }) => bg || Theme.color.gray};
  height: ${({ h }) => h || null};
  border-radius: 16px;
  border: none;
  cursor: pointer;

  &.sara-basic {
    border-radius: 10px;
    background: ${Theme.color.saraPrimary};
    height: 48px;
    &:hover {
      transition: all ease-out 300ms;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), #007bed;
    }
  }

  &.sara-disabled {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%), #007bed;
  }

  &.mara-basic {
    background: ${Theme.color.maraPrimary};
    &:hover {
      transition: all ease-out 300ms;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), #ef2b00;
    }
  }

  &.mara-disabled {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%), #ef2b00;
  }

  ${Theme.deviceSize.large} {
    &.sara-basic {
      border-radius: 12px;
      height: 52px;
    }
  }
`;

export default StyledButton;
