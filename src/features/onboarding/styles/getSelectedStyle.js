import { css } from "styled-components"

/**
 * 온보딩페이지의 선택 여부에 따른 CSS를 리턴하는 함수입니다
 * @param {boolean} isSeleted 
 * @returns css
 */
export const getSelectedCss = (isSeleted) => {
  if (isSeleted) return css`
    opacity: 1.0;
    scale: 1.2;
    `

  else return css`
    opacity: 0.5;
  `
}
