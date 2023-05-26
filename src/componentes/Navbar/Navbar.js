import React from "react";
import { styled } from "styled-components";
import { NavbarButton } from "../../items/Navbar/NavbarButton";
import { useLocation, useNavigate } from "react-router-dom";
import { device } from "../../Styles";
import Swal from "sweetalert2";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;

  // flex는 글로벌 스타일로 설정
  .flex {
    max-width: 1024px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media ${device.laptop} {
  }
`;

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const LoginAlter = () => {
    Swal.fire({
      icon: "info",
      focusConfirm: true,
      text: "회원 기능은 추후 적용 예정입니다.",
    });
  };

  return (
    <StyledNavbar>
      <div className="flex">
        <div className="flex-left">
          <NavbarButton
            size="medium"
            label="로고"
            onClick={() => navigate("/")}
          />
          <NavbarButton
            $primary={pathname === "/"}
            size="medium"
            label="Sara"
            onClick={() => navigate("/")}
          />
          <NavbarButton
            $primary={pathname === "/page"}
            size="medium"
            label="페이지"
            onClick={() => navigate("/page")}
          />
        </div>
        <div className="flex-right">
          <NavbarButton
            size="small"
            label="로그인"
            onClick={() => LoginAlter()}
          />
          <NavbarButton size="small" label="설정" />
        </div>
      </div>
    </StyledNavbar>
  );
}
