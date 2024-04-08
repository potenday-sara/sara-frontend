import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import Navbar from './components/molecules/navbar';
import Layout from './components/molecules/layout';
import CommentList from './components/organisms/comments';

import { ReactComponent as SaraCharacter } from './assets/saracharacter.svg';
import { ReactComponent as SaraTitle } from './assets/saratitle.svg';
import { ReactComponent as SaraComment } from './assets/sara.svg';
import { ReactComponent as MaraComment } from './assets/mara.svg';

import Text from '../../components/atoms/Text';
import { Theme } from '../../Styles';
import Kakao from './components/atoms/button/Kakao';
import Share from './components/atoms/button/Share';
import Like from './components/atoms/button/Like';
import Button from '../../components/atoms/Button';
import useCommunityQuestion from './hooks/useCommunityQuestion';

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
  border-bottom: 1px solid #dddddd;
`;

const StyledQuestionAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px 0;
  .svg {
    margin-bottom: 20px;
  }

  border-bottom: 1px solid #dddddd;
`;

const StyledShareButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;

  .buttons {
    display: flex;
    gap: 8px;
  }
`;

const StyledQuestionButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export default function Community() {
  const [searchParams] = useSearchParams();
  const questionId = useMemo(() => searchParams.get('id'), [searchParams]);

  console.log('questionId', questionId);
  const { QuestionData, answerData } = useCommunityQuestion('96c646d2-2bd2-4a1c-8e92-1e6c32505c18');

  console.log('QuestionFormData', QuestionData);
  console.log('answerData', answerData);

  return (
    <>
      <Navbar />
      <Layout>
        <StyledQuestionInformation>
          <SaraTitle />
          <div className="text">
            <Text label={QuestionData.product} size="20px" bold="700" />
            <Text label={QuestionData.content} size="14px" style={{ marginTop: '3px' }} />
          </div>
        </StyledQuestionInformation>
        <StyledQuestionAnswer>
          <SaraCharacter className=".svg" />
          <Text
            style={{ lineHeight: '22.4px' }}
            label={answerData.content}
            size="14px"
            bold="500"
            color={Theme.color.darkGray}
          />
          <StyledShareButtons>
            <Like />
            <div className="buttons">
              <Share />
              <Kakao />
            </div>
          </StyledShareButtons>
          <StyledQuestionButtons>
            <Button
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '12px',
                backgroundColor: Theme.color.saraSecondary,
                gap: '6px',
                borderRadius: '8px',
              }}
            >
              <SaraComment />
              <Text label="에게 나도 질문하기" size="13px" bold="700" color={Theme.color.saraPrimary} />
            </Button>
            <Button
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '12px',
                gap: '6px',
                backgroundColor: Theme.color.maraSecondary,
                borderRadius: '8px',
              }}
            >
              <MaraComment />
              <Text label="에게 물어볼까?" size="13px" bold="700" color={Theme.color.maraPrimary} />
            </Button>
          </StyledQuestionButtons>
        </StyledQuestionAnswer>

        <CommentList comments={COMMENTS_LIST} type="sara" />
        {/* <MaraTitle /> */}
      </Layout>
    </>
  );
}
