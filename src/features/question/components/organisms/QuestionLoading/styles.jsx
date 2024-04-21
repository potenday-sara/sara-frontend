import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionLoading = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;

  .logo {
    width: 179px;
  }

  .tip-chip {
    user-select: none;
    border-radius: 6px;
    border: 1px solid ${({ type }) => (type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};
    font-size: 12px;
    font-weight: 700;
    padding: 6px;
  }
  .recommend-coupang {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
  }

  .flex {
    display: flex;
    align-items: flex-end;
  }

  ${Theme.deviceSize.medium} {
    gap: 20px;
    .logo {
      width: 156px;
    }
    .recommend-coupang {
      gap: 10px;
      padding-bottom: 20px;
    }
  }
  ${Theme.deviceSize.large} {
    gap: 24px;
    .recommend-coupang {
      gap: 12px;
      padding-bottom: 24px;
    }
  }
  ${Theme.deviceSize.small} {
    .logo {
      width: 134px;
    }
  }
`;

const TipChip = styled.div`
  user-select: none;
  border-radius: 6px;
  border: 1px solid ${(props) => props.$color};
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.$color};
  padding: 6px;
`;

export default StyledQuestionLoading;
export { TipChip };
