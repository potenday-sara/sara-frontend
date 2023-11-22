import React from 'react';
import { BasicButton } from '../../../../../components/Button/MainButton';
import StyledSaramaraForm from './styles';
import Input from '../../../../../components/atoms/Input';
import Label from '../../../../../components/atoms/Label';
import Text from '../../../../../components/atoms/Text';
import Textarea from '../../../../../components/atoms/Textarea';
import Button from '../../../../../components/atoms/Button';
import { Theme } from '../../../../../Styles';

export default function SaramaraForm({ type }) {
  return (
    <StyledSaramaraForm>
      <Label
        m={'0 0 8px 0px'}
        htmlFor="item"
        text={<Text $bold={'lg'} label={'어떤걸 사고싶어?'} />}
      />
      <Input id="item" h="56px" ph={'고민하는 물건을 적어주세요'} />
      <Label
        m={'16px 0 8px'}
        htmlFor="contents"
        text={<Text $bold={'lg'} label={'왜 고민하고 있어?'} />}
      />
      <Textarea
        id="contents"
        h="88px"
        ph={
          'ex) 벌써 세 번 잃어버렸는데,이번에 사면 또 잃어버릴 것 같아서 못 사겠어...'
        }
      />
      <Button
        label={<Text label={'사야할까?'} color={'white'} />}
        m={'16px 0 0'}
        bg={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
      />
    </StyledSaramaraForm>
  );
}
