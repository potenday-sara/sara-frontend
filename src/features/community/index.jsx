import styled from 'styled-components';

import React from 'react';
import Navbar from './components/molecules/navbar';
import Layout from './components/molecules/layout';
import Text from '../../components/atoms/Text';

import { ReactComponent as SaraComment } from './assets/saraComment.svg';

const StyledComments = styled.div`
  width: 100%;

  .wrapper {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const StyledComment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;

  .contents {
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 4px;
  }
`;

export default function Community() {
  return (
    <>
      <Navbar />
      <Layout>
        <div>안녕하dd세요</div>
        <StyledComments>
          <Text bold="700" label="댓글" size="14px" />
          <div className="wrapper">
            <StyledComment>
              <div className="img">
                <SaraComment />
              </div>
              <div className="contents">
                <Text label="프리미엄 스파게티머니 5932" size="12px" color="#999" />
                <Text
                  label="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
                  size="12px"
                />
                <Text label="2021-08-10" size="12px" color="#999" bold="700" />
              </div>
            </StyledComment>
          </div>
        </StyledComments>
      </Layout>
    </>
  );
}
