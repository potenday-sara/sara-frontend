import React from "react";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Sara } from "../../images/logos/miainlogo.svg";
import { ReactComponent as Mara } from "../../images/logos/maramainlogo.svg";

const StyledNavbar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100px;
  display: flex;
  padding-left: 50px;
  .logobox {
    width: 100px;
    height: 100px;

    svg {
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  }
`;

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goHome = () => {
    navigate("/");
  };
  return (
    <StyledNavbar>
      <div className="logobox">
        {pathname === "/question/sara" ? (
          <Sara onClick={goHome} />
        ) : (
          <Mara onClick={goHome} />
        )}
      </div>
    </StyledNavbar>
  );
}
