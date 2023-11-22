import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const colorPalete = [
  'saraPrimary',
  'saraSecondary',
  'maraPrimary',
  'maraSecondary',
  'white',
  'black',
];

export const Theme = {
  color: {
    // 테마 색깔
    maraPrimary: '#ef2b00',
    maraSecondary: '#fddfd9',
    saraPrimary: '#007bed',
    saraSecondary: '#d9ebfc',
    // 기본색깔
    gray: '#ccc',
    white: '#fff',
    black: '#333',
  },
};

/**
 * 테마색의 컬러 코드를 리턴하는 함수
 * @param {string} saraPrimary
 * @param {string} saraSecondaray
 * @param {string} maraPrimary
 * @param {string} maraSecondary
 * @param {string} white
 * @param {string} black
 * @param {string} gray
 * @returns
 */
export const getColorCodeByType = (color) => {
  switch (color) {
    case 'saraPrimary':
      return Theme.color.saraPrimary;
    case 'saraSecondaray':
      return Theme.color.saraSecondary;
    case 'maraPrimary':
      return Theme.color.maraPrimary;
    case 'maraSecondary':
      return Theme.color.maraSecondary;
    case 'white':
      return Theme.color.white;
    case 'black':
      return Theme.color.black;
    case 'gray':
      return Theme.color.gray;
  }
};

/**
 * 프로젝트에서 사용하는 컬러 코드를 반환하는 코드입니다.
 * @param {string} color 'blue', 'red', 'gray', 'white', 'black' 값 중 하나를 가집니다
 * @returns {string} 컬러 코드 반환
 */
export const getColorCode = ($color) => {
  switch ($color) {
    case 'blue':
      return '#007bed';
    case 'red':
      return '#ef2b00';
    case 'gray':
      return '#00004d';
    case 'white':
      return '#ffffff';
    case 'black':
      return '#333333';
  }
};

export const getBoldCode = ($bold) => {
  switch ($bold) {
    case 'sm':
      return 400;
    case 'md':
      return 500;
    case 'lg':
      return 700;
  }
};

export const getDestopTextSizeCode = ($size) => {
  switch ($size) {
    case 'xs':
      return css`
        font-size: 14px;
        @media screen and (${(props) => props.theme.desktopLarge}) {
          font-size: 16px;
        }
      `;
    case 'sm':
      return css`
        font-size: 16px;
        @media screen and (${(props) => props.theme.desktopLarge}) {
          font-size: 24px;
        }
      `;
    case 'md':
      return css`
        font-size: 18px;
        @media screen and (${(props) => props.theme.desktopLarge}) {
          font-size: 26px;
        }
      `;
    case 'lg':
      return css`
        font-size: 20px;
        @media screen and (${(props) => props.theme.desktopLarge}) {
          font-size: 28px;
        }
      `;
    case 'xl':
      return css`
        font-size: 22px;
        @media screen and (${(props) => props.theme.desktopLarge}) {
          font-size: 30px;
        }
      `;
    default:
      return $size;
  }
};

export const getBorderColor = ({ $type }) => {
  switch ($type) {
    case 'mara':
      return css`
        border: 1px solid #ef2b00;
        border-radius: 12px;
      `;
    case 'sara':
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
    case 'mara':
      return css`
        color: #ef2b00;
      `;
    case 'sara':
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
    case 'mara':
      return css`
        background-color: #ef2b00;
      `;
    case 'sara':
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
  ${reset}
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

/**
 * type을 기준으로 색깔을 정해주는 함수입니다
 * @param {['sara', 'mara']} $type sara, mara 둘 중 하나의 값을 받습니다
 * @return {String} sara 일 경우 blue, mara일 경우 red를 리턴합니다
 */
export const getColorByType = ($type) => {
  return $type === 'sara' ? 'blue' : 'red';
};
