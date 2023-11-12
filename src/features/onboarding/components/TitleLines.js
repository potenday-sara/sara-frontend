
import { ReactComponent as SaraTitleLines } from '../assets/SaraBubbleText.svg'
import { ReactComponent as MaraTitleLines } from '../assets/MaraBubbleText.svg'
import PropTypes from 'prop-types'
import React from 'react'
import { css, styled } from 'styled-components'

const getTitleLinesCSSByType = (type) => {
  if (type === 'sara') return css`
    width: 240px;
    @media screen and (${props => props.theme.desktopLarge}) {
      width: 340px;
    }

  `
  else return css`
    width: 290px;
    @media screen and (${props => props.theme.desktopLarge}) {
      width: 340px;
    }
  `
}

const StyledTextbubble = styled.div`
  ${({ $type }) => getTitleLinesCSSByType($type)}
  height: 64px;
  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (${props => props.theme.desktopLarge}) {
    height: 91px;
  }

`
/**
 * 
 * @param {['sara', 'mars']} sara, mara로 타입을 결정합니다
 * @returns {React.ReactComponentElement}
 */
export default function TitleLines({ $type }) {
  return <StyledTextbubble $type={$type}>
    {$type === 'sara' ? <SaraTitleLines /> : <MaraTitleLines />}
  </StyledTextbubble>

}

TitleLines.propTypes = {
  $type: PropTypes.oneOf(['sara', 'mara']).isRequired
}