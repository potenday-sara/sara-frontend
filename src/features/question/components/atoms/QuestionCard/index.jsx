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

function Title({ children }) {
  return children;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

function Contents({ label }) {
  const string = label.length > 50 ? `${label.slice(0, 50)}...` : label;
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
