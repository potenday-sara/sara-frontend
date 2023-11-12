import React from "react";
import { css, styled } from "styled-components";
import { ReactComponent as FotterLogo } from "../../images/logos/footerlogo.svg";
import { useLocation, useNavigate, useParams, useRoutes } from "react-router-dom";


const getFooterCSSbyPage = (page) => {
  switch (page) {
    case '/':
      return css`
        display: grid;
        grid-template-columns: minmax(512px,1fr) 208px minmax(512px, 1fr);
        grid-template-rows: 1fr;

        .left {
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #007BED;
        
        }
        .right {
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #EF2B00;

        }
      `


    default:
      css`
        /* background-color:  */
      `
  }
}



const StyledFooter = styled.div`
  background: transparent ;
  width: 100%;
  height: 64px;
  bottom: 0px;
  display: flex;
  align-items: center;
  padding: 0px 40px;
  gap: 30px;

  p {
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
    color: #0000004d;
  }
`;

export default function Footer() {
  const navigate = useLocation()
  return (
    <StyledFooter>
      <FotterLogo />
      <p>Copyright 2023 SARA. All rights reserved</p>
      <p>Team SARA Contact. potenday.sara@gmail.com</p>
    </StyledFooter>
  );
}
