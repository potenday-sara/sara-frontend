import styled from 'styled-components';

const StyledTypeButton = styled.button`
  height: 34px;
  padding: 10px 12px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$selected ? props.theme.color.white : props.theme.color.gray)};
  border: 1px solid
    ${(props) =>
      props.$selected ? (props.$type === 'all' ? props.theme.color.black : props.$color) : props.theme.color.gray};
  background-color: ${(props) => props.$color};
  fill: ${(props) => (props.$selected ? props.theme.color.white : props.theme.color.gray)};
`;

export default StyledTypeButton;
