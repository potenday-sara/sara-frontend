import { css } from "styled-components";

export const getGridStyles = ({ type }) => {
  if (type === "sara") {
    return css`
      position: relative;
      grid-template-columns: 2fr minmax(200px, 1fr);

      .realtime {
        text-align: right;
        .texts button {
          margin-left: auto;
        }
      }
      .logobox {
        align-items: end;
        justify-content: flex-end;
      }
    `;
  } else {
    return css`
      grid-template-columns: minmax(200px, 1fr) 2fr;
      .realtime {
        text-align: left;
        grid-area: 1 / 2 / 2 / 3;
        .texts button {
          margin-right: auto;
        }
      }
      .logobox {
        align-items: end;
        justify-content: flex-start;
      }

      .choiceButton {
        grid-area: 2 / 1 / 3 / 2;
      }
    `;
  }
};
