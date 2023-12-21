import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './styles';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

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
  const string = label.length > 65 ? `${label.slice(0, 62)}...` : label;
  return <Text label={string} size="14px" color={Theme.color.midGray} />;
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
