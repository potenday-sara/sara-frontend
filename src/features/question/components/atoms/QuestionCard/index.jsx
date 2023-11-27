import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './styles';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

const QuestionCard = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

const Title = ({ children }) => {
  return children;
};

const Contents = ({ label }) => {
  const string = label.length > 20 ? label.slice(0, 20) + '...' : label;
  return <Text label={string} size={'lg'} color={Theme.color.darkGray} />;
};

QuestionCard.Title = Title;
QuestionCard.Contents = Contents;

export default QuestionCard;

QuestionCard.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
  style: PropTypes.object,
};
