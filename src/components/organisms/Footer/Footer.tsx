import React from 'react';
import PropTypes from 'prop-types';
import FooterLogo from '@/asset/logo/footerlogo.svg';
//
// const StyledFooter = styled.footer`
//   background: transparent;
//   height: 64px;
//   align-items: center;
//   display: grid;
//   grid-template-columns: auto 1fr;
//
//   /* justify-content: center; */
//   align-items: center;
//   column-gap: 24px;
//   margin-left: 40px;
//   .texts {
//     display: flex;
//     flex-direction: column;
//     gap: 4px;
//     span {
//       font-weight: 500;
//       font-size: 10px;
//       color: #0000004d;
//     }
//   }
// `;

export default function Footer({ ...rest }) {
  return (
    <footer className="h-[64px] flex items-center gap-1 py-[14px] px-4 bg-gray-50">
      <FooterLogo />
      <div
        className="flex text-gray-400 flex-col gap-[2px]"
        style={{
          fontSize: '8px',
        }}
      >
        <span>Team SARA Contact. potenday.sara@gmail.com</span>
        <span>Copyright 2023 SARA. All rights reserved</span>
      </div>
    </footer>
  );
}

Footer.propType = {
  style: PropTypes.shape({}),
};
