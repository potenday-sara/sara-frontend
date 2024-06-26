import React from 'react';
import PropTypes from 'prop-types';
import { Theme } from '../../../Styles';
import { ReactComponent as LeftArrow } from '../../../images/svgs/leftArrow.svg';
import { ReactComponent as RightArrow } from '../../../images/svgs/rightArrow.svg';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import StyledPagination from './styles';

const paginationStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
};

const saraPaginationStyle = {
  ...paginationStyle,
  backgroundColor: Theme.color.saraSecondary,
};

const maraPaginationStyle = {
  ...paginationStyle,
  backgroundColor: Theme.color.maraSecondary,
};

function Pagination({ nowPage, maxPage, leftClick, rightClick, type, ...rest }) {
  return (
    <StyledPagination {...rest}>
      <Button style={type === 'sara' ? saraPaginationStyle : maraPaginationStyle} onClick={leftClick}>
        <LeftArrow
          className={nowPage === 1 ? 'disActive' : null}
          stroke={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        />
      </Button>
      <Text
        label={`${nowPage} / ${maxPage}`}
        size="14px"
        style={{
          textAlign: 'center',
        }}
        bold="500"
        color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
      />

      <Button style={type === 'sara' ? saraPaginationStyle : maraPaginationStyle} onClick={rightClick}>
        <RightArrow
          className={nowPage === maxPage ? 'disActive' : null}
          stroke={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        />
      </Button>
    </StyledPagination>
  );
}

Pagination.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  nowPage: PropTypes.number.isRequired,
  leftClick: PropTypes.func.isRequired,
  rightClick: PropTypes.func.isRequired,
  maxPage: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  type: '',
  className: '',
};

export default Pagination;
