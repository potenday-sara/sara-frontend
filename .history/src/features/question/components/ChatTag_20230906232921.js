import React, { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import TextLabel from "../../../components/TextLabel/TextLabel";
import { useLocation, useNavigate } from "react-router-dom";


const StyledChatTags = styled.div`
  position: absolute;
  transform: translate(-100%, 0);
  top:10%;
  left: 0px;
  display: flex;
  flex-direction: column;
  ;
`

const getSelectedCss = (isSelected) => {
  if (isSelected) return css`
    opacity: 1;
  `
  else return css`
    opacity: 0.3;
  `
}

const $textLabelStyles = css`
  border-top-left-radius : 8px;
  border-bottom-left-radius : 8px;
  width: 72px;
  height: 48px;
  align-items: center;
  padding: 8px 8px;
  cursor: pointer;
  scale: 1;
  ${({ $isSelected }) => getSelectedCss($isSelected)}
`
/**
 * $type, $isSelected를 인자로 ChatBox의 꼬리 태그를 
 
 */
export default function ChatTags() {
  const [type, setType] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    setType(location.pathname.slice(10, 14))
  }, [location.pathname])


  const changeType = (type) => {
    navigate(`/question/${type}`)
  }

  return <StyledChatTags>
    <TextLabel onClick={() => changeType('sara')} $isSelected={type === 'sara'} circleTextLogo={true} $type={'sara'} $bgColor={'blue'} $textLabelStyles={$textLabelStyles} />
    <TextLabel onClick={() => changeType('mara')} $isSelected={type === 'mara'} circleTextLogo={true} $type={'mara'} $bgColor={'red'} $textLabelStyles={$textLabelStyles} />
  </StyledChatTags>

  // <TextLabel onClick={() => { setSelectedType('mara') }} $isSelected={$type === 'mara'} circleTextLogo={true} $type={'mara'} $bgColor={'red'} $textLabelStyles={$textLabelStyles} />

}