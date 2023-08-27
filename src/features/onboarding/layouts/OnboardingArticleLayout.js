import React, { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import MainTextLogo from "../../../components/Logo/MainTextLogo";
import RealtimeTrends from "../components/RealtimeTrends";
import RealtimeTrend from "../components/RealtimeTrend";
import { getRealtimeTrendsAPI } from "../apis/getRealtimeTrendsAPI";
import { useQuery } from "react-query";
import TextLabel from "../../../components/TextLabel/TextLabel";
import { getSelectedCss } from "../styles/getSelectedStyle";


const StyledOnboardingArticleLayout = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const $getMainTextLogoStyles = css`
  margin-top: 80px;
  margin-bottom: 64px;
`

const $textLabelStyles = css`
  width: 100%;
  height: 130px;
  align-items: center;
  cursor: pointer;
  ${({ $isSelected }) => getSelectedCss($isSelected)}
  scale: 1;
`

export default function OnboardingArticleLayout({ $type, setSelectedType }) {
  const [realtimeTrends, setRealtimeTrends] = useState([])
  const { isLoading: trendLoading, data: RealtimeTrendsAPI } = useQuery(
    [$type, "ranking"],
    () => getRealtimeTrendsAPI($type)
  );
  useEffect(() => {
    setRealtimeTrends(RealtimeTrendsAPI?.data?.data);
  }, [RealtimeTrendsAPI]);


  return <StyledOnboardingArticleLayout>
    <MainTextLogo $type={$type} $getMainTextLogoStyles={$getMainTextLogoStyles} />
    <RealtimeTrends $type={$type} data={realtimeTrends} />
    <TextLabel onClick={() => { setSelectedType('sara') }} $isSelected={$type === 'sara'} circleTextLogo={true} $type={'sara'} $bgColor={'blue'} $textLabelStyles={$textLabelStyles} />
    <TextLabel onClick={() => { setSelectedType('mara') }} $isSelected={$type === 'mara'} circleTextLogo={true} $type={'mara'} $bgColor={'red'} $textLabelStyles={$textLabelStyles} />

  </StyledOnboardingArticleLayout>
}