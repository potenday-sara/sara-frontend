import React, { useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
import RealtimeTrends from '../components/RealtimeTrends';
import { getRealtimeTrendsAPI } from '../apis/getRealtimeTrendsAPI';
import { useQuery } from 'react-query';
import TextLabel from '../../../components/TextLabel/TextLabel';
import { getSelectedCss } from '../styles/getSelectedStyle';
import PropTypes from 'prop-types';
import Logo from '../../../components/atoms/Logo';

const StyledOnboardingArticleLayout = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const $textLabelStyles = css`
  width: 100%;
  height: 130px;
  align-items: center;
  cursor: pointer;
  ${({ $isSelected }) => getSelectedCss($isSelected)}
  scale: 1;
`;

export default function OnboardingArticleLayout({ $type, setSelectedType }) {
  const [realtimeTrends, setRealtimeTrends] = useState([]);
  const { data: RealtimeTrendsAPI } = useQuery([$type, 'ranking'], () =>
    getRealtimeTrendsAPI($type)
  );
  useEffect(() => {
    setRealtimeTrends(RealtimeTrendsAPI?.data?.data);
  }, [RealtimeTrendsAPI]);

  return (
    <StyledOnboardingArticleLayout>
      <Logo width="148px" height="80px" logoType={'MainLogo'} />
      <RealtimeTrends $type={$type} data={realtimeTrends} />
      <TextLabel
        onClick={() => {
          setSelectedType('sara');
        }}
        $isSelected={$type === 'sara'}
        circleTextLogo={true}
        $type={'sara'}
        $bgColor={'blue'}
        $textLabelStyles={$textLabelStyles}
      />
      <TextLabel
        onClick={() => {
          setSelectedType('mara');
        }}
        $isSelected={$type === 'mara'}
        circleTextLogo={true}
        $type={'mara'}
        $bgColor={'red'}
        $textLabelStyles={$textLabelStyles}
      />
    </StyledOnboardingArticleLayout>
  );
}
OnboardingArticleLayout.propTypes = {
  $type: PropTypes.string,
  setSelectedType: PropTypes.any,
};
