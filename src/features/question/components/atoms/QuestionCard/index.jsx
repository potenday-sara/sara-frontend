import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './styles';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';
import useResize from '../../../../../hooks/useResize';

function QuestionCard({ children, ...rest }) {
  return <StyledCard {...rest}>{children}</StyledCard>;
}

QuestionCard.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};

QuestionCard.defaultProps = {
  style: {},
};

function Title({ label, type }) {
  const string = label.length > 15 ? `${label.slice(0, 12)}...` : label;
  return (
    <Text
      className="card-title"
      bold="700"
      size="16px"
      label={string}
      color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
    />
  );
}

Title.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  label: PropTypes.string.isRequired,
};

function Contents({ label }) {
  const { sizeType } = useResize();
  const textSlice = sizeType === 'small' ? 15 : 65;
  const string = label.length > textSlice ? `${label.slice(0, textSlice - 3)}...` : label;
  return <Text label={string} className="card-content" size="14px" color={Theme.color.midGray} />;
}

Contents.propTypes = {
  label: PropTypes.string,
};

Contents.defaultProps = {
  label: '',
};

QuestionCard.Title = Title;
QuestionCard.Contents = Contents;

export default QuestionCard;
