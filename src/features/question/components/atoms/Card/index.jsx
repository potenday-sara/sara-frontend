import PropTypes from 'prop-types';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';
import rocket from '../../../assets/temp/rocket.jpg';
import StyledCard from './styles';

function Card({
  is_rocket: isRocket,
  product_image: img,
  product_name: label,
  product_price: price,
  product_url: productUrl,
  ...rest
}) {
  const localePrice = price.toLocaleString();
  return (
    <StyledCard onClick={() => rest.onClick(productUrl)}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />

      <div className="contents">
        <Text className="CoupangCard__Item" label={label} color={Theme.color.midGray} size="14px" bold="700" />
        <Text
          className="CoupangCard__Price"
          label={`${localePrice}원`}
          color={Theme.color.darkGray}
          size="16px"
          bold="500"
        />
        {isRocket && (
          <div
            className="rocket"
            style={{
              backgroundImage: `url(${rocket})`,
            }}
          />
        )}
      </div>
    </StyledCard>
  );
}

Card.propTypes = {
  onClick: PropTypes.func,
  // category_name: PropTypes.string.isRequired,
  // is_free_shipping: PropTypes.bool.isRequired,
  is_rocket: PropTypes.bool.isRequired,
  // product_id: PropTypes.number.isRequired,
  product_image: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  product_price: PropTypes.number.isRequired,
  product_url: PropTypes.string.isRequired,
};

Card.defaultProps = {
  onClick: undefined,
};

export default Card;
