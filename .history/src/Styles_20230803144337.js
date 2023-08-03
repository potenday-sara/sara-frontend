import { createGlobalStyle, css } from "styled-components";

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
  
  p {
    font-family: Pretendard;
    font-size: 18px;
  line-height: 20px;
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