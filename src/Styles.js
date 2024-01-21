import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const colorPalete = ['saraPrimary', 'saraSecondary', 'maraPrimary', 'maraSecondary', 'white', 'black'];

export const Theme = {
  deviceSize: {
    small: '@media (max-width: 1200px)',
    medium: '@media (max-width: 1919px)',
    large: '@media (min-width: 1920px)',
  },
  color: {
    // 테마 색깔
    maraPrimary: '#ef2b00',
    maraSecondary: '#fddfd9',
    saraPrimary: '#007bed',
    saraSecondary: '#d9ebfc',
    // 기본색깔
    gray: '#ccc',
    midGray: '#666',
    darkGray: '#999',
    white: '#fff',
    black: '#333',
  },
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
  #root {
    position: relative;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  select {
    -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
  select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  }
  


`;

/**
 * type을 기준으로 색깔을 정해주는 함수입니다
 * @param {['sara', 'mara']} $type sara, mara 둘 중 하나의 값을 받습니다
 * @return {String} sara 일 경우 blue, mara일 경우 red를 리턴합니다
 */
export const getColorByType = ($type) => ($type === 'sara' ? 'blue' : 'red');
