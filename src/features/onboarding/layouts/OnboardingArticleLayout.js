import React, { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import MainTextLogo from "../../../components/Logo/MainTextLogo";
import RealtimeTrends from "../components/RealtimeTrends";
import RealtimeTrend from "../components/RealtimeTrend";
import { getRealtimeTrendsAPI } from "../apis/getRealtimeTrendsAPI";
import { useQuery } from "react-query";


const StyledOnboardingArticleLayout = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const getMainTextLogoStyles = css`
  margin-top: 80px;
  margin-bottom: 184px;
`

export default function OnboardingArticleLayout({ $type }) {
  const [realtimeTrends, setRealtimeTrends] = useState([])
  const { isLoading: trendLoading, data: RealtimeTrendsAPI } = useQuery(
    [$type, "ranking"],
    () => getRealtimeTrendsAPI($type)
  );
  useEffect(() => {
    setRealtimeTrends(RealtimeTrendsAPI?.data?.data);
  }, [RealtimeTrendsAPI]);


  return <StyledOnboardingArticleLayout>
    <MainTextLogo $type={$type} getMainTextLogoStyles={getMainTextLogoStyles} />
    <RealtimeTrends $type={$type} data={realtimeTrends} />

  </StyledOnboardingArticleLayout>
}