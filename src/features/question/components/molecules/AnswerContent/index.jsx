import React from 'react';
import StyledAnswerContent from './styles';
import Logo from '../../../../../components/atoms/Logo';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';

const temp =
  '블루투스 이어폰을 구매하는 건 나쁘지 않은 선택일 수 있어. 알다시피 몇 번이나 산 후에 잃어버리는 걱정은 당연한 거야. 그렇지만 우리는 실수를 범할 수 있는 거니까 너무 스스로를 자책하지 말아야 해. 이번에는 이전에 경험한 것을 근거로 조금 더 신경을 써보는 건 어때? 예를 들면, 이어폰을 사용한 후에는 항상 돌려놓을 곳을 정해두고 잊지 않도록 해봐. 또한, 소중한 물건이니까 가방이나 주머니에 넣을 때 조심하면 좋을 거야. 그리고 이어폰을 잃어버리더라도 너무 슬퍼하지 말고 다시 구매할 수 있을 거야. 그렇게 생각하면 구매하는 게 좋을 거야. 사라.';

export default function AnswerContent({ type }) {
  return (
    <StyledAnswerContent>
      <div className="flex">
        <Logo
          w={'78px'}
          logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
          fill={
            type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary
          }
        />
        <Text label={'의 답변'} />
      </div>
      <Text
        style={{ lineHeight: 1.3 }}
        label={temp}
        size={'sm'}
        color={Theme.color.darkGray}
      />
    </StyledAnswerContent>
  );
}
