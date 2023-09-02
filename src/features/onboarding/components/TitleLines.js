
import { ReactComponent as SaraTitleLines } from '../assets/SaraBubbleText.svg'
import { ReactComponent as MaraTitleLines } from '../assets/MaraBubbleText.svg'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * 
 * @param {['sara', 'mars']} sara, mara로 타입을 결정합니다
 * @returns {React.ReactComponentElement}
 */
export default function TitleLines({ $type }) {
  return $type === 'sara' ? <SaraTitleLines /> : <MaraTitleLines />
}

TitleLines.propTypes = {
  $type: PropTypes.oneOf(['sara', 'mara']).isRequired
}