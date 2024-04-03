import React from 'react';
import styled from 'styled-components';
import Navbar from './components/molecules/navbar';
import Layout from './components/molecules/layout';
import CommentList from './components/organisms/comments';

import { ReactComponent as SaraCharacter } from './assets/saracharacter.svg';
import { ReactComponent as SaraTitle } from './assets/saratitle.svg';
import { ReactComponent as MaraTitle } from './assets/maratitle.svg';
import Text from '../../components/atoms/Text';
import { Theme } from '../../Styles';

const COMMENTS_LIST = [
  {
    id: 1,
    name: '프리미엄 스파게티머니 5932',
    content: '안녕하세요',
    date: '2021-08-10',
  },
  {
    id: 2,
    name: '프리미엄 스파게티머니 5932',
    content: '안녕하세요',
    date: '2021-08-10',
  },
  {
    id: 3,
    name: '프리미엄 스파게티머니 5932',
    content: '안녕하세요',
    date: '2021-08-10',
  },
];

const StyledQuestionInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #ddd;
`;

const StyledQuestionAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px 0;
  svg {
    margin-bottom: 20px;
  }
  border-bottom: 1px solid #ddd;
`;

export default function Community() {
  return (
    <>
      <Navbar />
      <Layout>
        <StyledQuestionInformation>
          <SaraTitle />
          <div className="text">
            <Text label="안녕하세요" size="20px" bold="700" />
            <Text label="이미 잃어버려쎴는데 어쩌구 저쩌구" size="14px" style={{ marginTop: '3px' }} />
          </div>
        </StyledQuestionInformation>
        <StyledQuestionAnswer>
          <SaraCharacter />
          <Text style={{ lineHeight: '22.4px' }} label="ㅋㄷㅋㄷ" size="14px" bold="500" color={Theme.color.darkGray} />
        </StyledQuestionAnswer>

        <CommentList comments={COMMENTS_LIST} type="sara" />
        <MaraTitle />
      </Layout>
    </>
  );
}
