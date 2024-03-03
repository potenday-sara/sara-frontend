import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TitleLines from '../../atoms/CharacterChat';
import Text from '../../../../../components/atoms/Text';
import StyledTextbubble from './styles';
import { Theme } from '../../../../../Styles';
import SaraMaraContext from '../../../stores/SaraMaraContext';

const textStyles = {
  opacity: 0.65,
};

/**
 * $type을 바탕으로 사라, 마라 말풍선을 리턴합니다.
 * @param {$type} sara, mara로 타입을 결정합니다
 * @returns {React.ReactComponentElement}
 */
export default function TitleBubble({ type }) {
  const { type: nowType } = useContext(SaraMaraContext);
  return (
    <StyledTextbubble type={type} isNowType={nowType === type}>
      <TitleLines type={type} />
      {type === 'sara' ? (
        <>
          <Text
            className="sub-title"
            label="사야할 것과 망설이는 이유를 말해주세요!"
            size="md"
            bold="lg"
            color={Theme.color.saraPrimary}
          />
          <Text
            className="caption"
            style={textStyles}
            size="xs"
            bold="sm"
            color={Theme.color.saraPrimary}
            label={`Sara가 긍정적인 정보와 효과를 알려주고,\n구매 결정을 내리는 데 도움을 줄 거예요!`}
          />
        </>
      ) : (
        <>
          <Text
            className="sub-title"
            label="사지 말아야 할 것과 망설이는 이유를 말해주세요."
            size="md"
            bold="lg"
            color={Theme.color.maraPrimary}
          />
          <Text
            className="caption"
            style={textStyles}
            label={`Mara가 객관적인 정보와 기준을 토대로,\n불매 결정을 내리는 데 도움을 줄 거예요!`}
            size="xs"
            bold="sm"
            color={Theme.color.maraPrimary}
          />
        </>
      )}
    </StyledTextbubble>
  );
}

TitleBubble.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
