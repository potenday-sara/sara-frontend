import { createGlobalStyle } from "styled-components";

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
