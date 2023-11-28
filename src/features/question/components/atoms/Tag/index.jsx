import React from 'react';
import PropTypes from 'prop-types';
import StyledTag from './styles';
import { Theme } from '../../../../../Styles';

function Tag({ type, isActive, ...rest }) {
  return (
    <StyledTag {...rest} type={type} isActive={isActive}>
      {type === 'sara' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
        >
          <path
            d="M0.75 24H13.0256L15.2575 19.3577L17.5624 24H29.25L27.5331 22.7737L15.3439 0L2.55271 22.7737L0.75 24Z"
            fill={Theme.color.saraPrimary}
            fillOpacity={isActive ? null : 0.4}
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M0 0H10.8613L12 1.22628L13.1387 0H24V24H0V0Z"
            fill={Theme.color.maraPrimary}
            fillOpacity={isActive ? null : 0.4}
          />
        </svg>
      )}
    </StyledTag>
  );
}

export default Tag;
