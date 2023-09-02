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
<<<<<<< HEAD
    .back {
      z-index: -1;
    }
=======

    .back {
      z-index: -1;
    }

>>>>>>> aa7271e6c471df8d34dc61dc99e71f797602da17
    .back-sara {
      left: -43%;
      width: 380px;
      height: 180px;
    }

    .back-mara {
      left: -65%;
      width: 420px;
      height: 180px;
    }
    `

  else return css`
    opacity: 0.5;

  `
}
