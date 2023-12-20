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
  return (
    <Text
      className="card-title"
      label={label}
      color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
      bold="700"
    />
  );
}

Title.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  label: PropTypes.string.isRequired,
};

function Contents({ label }) {
  const string = label.length > 50 ? `${label.slice(0, 100)}...` : label;
  return <Text className="card-content" label={string} color={Theme.color.midGray} bold="500" />;
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
