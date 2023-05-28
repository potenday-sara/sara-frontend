import React from "react";
import { styled } from "styled-components";
import { NavbarButton } from "../../items/Navbar/NavbarButton";
import { useLocation, useNavigate } from "react-router-dom";
import { device } from "../../Styles";
import Swal from "sweetalert2";
import { ReactComponent as Sara } from "../../images/logos/miainlogo.svg";
import { ReactComponent as Mara } from "../../images/logos/maramainlogo.svg";

const StyledNavbar = styled.div`
  position: fixed;
  top: 0px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100px;
  display: flex;
  padding-left: 50px;
  z-index: 2;
  // flex는 글로벌 스타일로 설정
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

export default function Navbar({ $type }) {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <StyledNavbar>
      <div className="logobox">
        {$type === "/sara" ? (
          <Sara onClick={goHome} />
        ) : (
          <Mara onClick={goHome} />
        )}
      </div>
    </StyledNavbar>
  );
}
