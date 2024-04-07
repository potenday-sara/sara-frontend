import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Theme } from '../../../../../Styles';
import Logo from '../../../../../components/atoms/Logo';
import LoungeContext from '../../../stores/LoungeStore';
import StyledTypeButton from './styles';

export default function TypeButton({ selected, type }) {
  const { setAll, setSara, setMara } = useContext(LoungeContext);
  const buttonContent = () => {
    if (type === 'sara') return <Logo logoType="SaraTextOnly" />;
    if (type === 'mara') return <Logo logoType="MaraTextOnly" />;
    return <p>전체</p>;
  };
  const buttonHandler = () => {
    if (type === 'sara') return setSara;
    if (type === 'mara') return setMara;
    return setAll;
  };
  const getButtonColor = () => {
    if (!selected) return Theme.color.white;
    if (type === 'sara') return Theme.color.saraPrimary;
    if (type === 'mara') return Theme.color.maraPrimary;
    return Theme.color.black;
  };

  return (
    <StyledTypeButton $selected={selected} onClick={buttonHandler()} $color={getButtonColor}>
      {buttonContent()}
    </StyledTypeButton>
  );
}

TypeButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};
