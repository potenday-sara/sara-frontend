import { createGlobalStyle, css } from "styled-components";

export const getBackgroundColor = ({ $backgroundColor }) => {
  switch ($backgroundColor) {
    case "red":
      return css`
        background-color: #ef2b00;
      `;
    case "blue":
      return css`
        background-color: #007bed;
      `;
    default:
      return css`
        background-color: ${$backgroundColor};
      `;
  }
};

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const device = {
  mobile: "min-width: 0px",
  laptop: "min-width: 1024px",
};
