import { createGlobalStyle, css } from "styled-components";

/**
 * 프로젝트에서 사용하는 컬러 코드를 반환하는 코드입니다.
 * @param {string} color 'blue', 'red', 'gray', 'white', 'black' 값 중 하나를 가집니다
 * @returns {string} 컬러 코드 반환
 */
export const getColorCode = ($color) => {
  switch ($color) {
    case 'blue':
      return '#007bed'
    case 'red':
      return '#ef2b00'
    case 'gray':
      return '#0000004d'
    case 'white':
      return '#ffffff'
    case 'black':
      return '#333333'
  }
}

export const getBoldCode = ($bold) => {
  switch ($bold) {
    case 'sm':
      return 300
    case 'md':
      return 500
    case 'lg':
      return 700
  }
}

export const getTextSizeCode = ($size) => {
  switch ($size) {
    case 'xs':
      return '14px'
    case 'sm':
      return '16px'
    case 'md':
      return '18px'
    case 'lg':
      return '20px'
    case 'xl':
      return '22px'
    default:
      return $size
  }
}




export const getBorderColor = ({ $type }) => {
  switch ($type) {
    case "mara":
      return css`
        border: 1px solid #ef2b00;
        border-radius: 12px;
      `;
    case "sara":
      return css`
        border: 1px solid #007bed;
        border-radius: 12px;
      `;
    default:
      return css`
        background-color: ${$type};
      `;
  }
};

export const getTextColor = ({ $type }) => {
  switch ($type) {
    case "mara":
      return css`
        color: #ef2b00;
      `;
    case "sara":
      return css`
        color: #007bed;
      `;
    default:
      return css`
        color: ${$type};
      `;
  }
};

export const getBackgroundColor = ({ $type }) => {
  switch ($type) {
    case "mara":
      return css`
        background-color: #ef2b00;
      `;
    case "sara":
      return css`
        background-color: #007bed;
      `;
    default:
      return css`
        background-color: ${$type};
      `;
  }
};

export const getBasicButton = () => css`
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05);
`;

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: Pretendard;
    font-size: 22px;
    line-height: 24px;
    
  }
  
  h2 {
    font-family: Pretendard;
    font-size: 20px;
    line-height: 22px;
  }

  .flex {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// export const device = {
//   mobile: "min-width: 0px",
//   laptop: "min-width: 1024px",
// };

export const windowSize = {
  base: "max-width: 1920px",
};


/**
 * type을 기준으로 색깔을 정해주는 함수입니다
 * @param {['sara', 'mara']} $type sara, mara 둘 중 하나의 값을 받습니다
 * @return {String} sara 일 경우 blue, mara일 경우 red를 리턴합니다
 */
export const getColorByType = ($type) => {
  return $type === 'sara' ? 'blue' : 'red'
}