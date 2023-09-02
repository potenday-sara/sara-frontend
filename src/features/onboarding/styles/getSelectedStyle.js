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
>>>>>>> 90f85befeb75d7d7215ac98e2fbd412fb48e136d
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
