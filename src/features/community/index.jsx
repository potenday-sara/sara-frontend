import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './components/molecules/layout';
import CommentList from './components/organisms/comments';

import { ReactComponent as MaraComment } from './assets/mara.svg';
import { ReactComponent as SaraComment } from './assets/sara.svg';
import { ReactComponent as SaraCharacter } from './assets/saracharacter.svg';
import { ReactComponent as SaraTitle } from './assets/saratitle.svg';

import { Theme } from '../../Styles';
import Button from '../../components/atoms/Button';
import Text from '../../components/atoms/Text';
import Kakao from './components/atoms/button/Kakao';
import Like from './components/atoms/button/Like';
import Share from './components/atoms/button/Share';
import CommunityQuestionCards from './components/organisms/questionCards';
import useCommunityQuestion from './hooks/useCommunityQuestion';
import Navbar from '../../components/organisms/Navbar/Navbar';

const StyledQuestionInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 20px;
  // padding-top: 20px;
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

const StyledMain = styled.main`
  position: relative;
  height: auto;

  background-color: ${({ type }) => (type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary)};
  .design {
    position: absolute;
    gap: 30px;
    flex-direction: column;
    overflow-x: hidden;
    display: flex;
    top: 50vh;
    transform: translate(0, -50%);
    width: 100%;
  }
`;

export default function Community() {
  const { QuestionData, answerData, isLoading, questionId, handleLike, like } = useCommunityQuestion();
  const navigate = useNavigate();

  const type = new URLSearchParams(window.location.search).get('type');

  return (
    <StyledMain type={type}>
      <Navbar style={{ position: 'static' }} />
      <div className="design">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="40" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1920 40H0V0H4000V40Z"
            fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            fillOpacity="0.03"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1920 80H0V0H4000V80Z"
            fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            fillOpacity="0.03"
          />
        </svg>
      </div>
      <Layout>
        {isLoading ? (
          <div>로딩중</div>
        ) : (
          <div
            style={{
              padding: '16px',
            }}
          >
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
                <Like count={QuestionData.like_count} onClick={handleLike} isLike={like} />
                <div className="buttons">
                  <Share />
                  <Kakao />
                </div>
              </StyledShareButtons>
              <StyledQuestionButtons>
                <Button
                  onClick={() => navigate('/question/sara')}
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
                  onClick={() => navigate('/question/mara')}
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

            <CommentList type="sara" questionId={questionId} />
            <CommunityQuestionCards />

            {/* <MaraTitle /> */}
          </div>
        )}
      </Layout>
    </StyledMain>
  );
}
