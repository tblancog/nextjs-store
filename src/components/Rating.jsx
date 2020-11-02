import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  const star = <FontAwesomeIcon icon={'star'} style={{ color }} />;
  const halfStar = <FontAwesomeIcon icon={'star-half-alt'} style={{ color }} />;
  const emptyStar = (
    <FontAwesomeIcon icon={['far', 'star']} style={{ color }} />
  );
  return (
    <>
      <div className="rating">
        <span>{value >= 1 ? star : value >= 0.5 ? halfStar : emptyStar}</span>
        <span>{value >= 2 ? star : value >= 1.5 ? halfStar : emptyStar}</span>
        <span>{value >= 3 ? star : value >= 2.5 ? halfStar : emptyStar}</span>
        <span>{value >= 4 ? star : value >= 3.5 ? halfStar : emptyStar}</span>
        <span>{value >= 5 ? star : value >= 4.5 ? halfStar : emptyStar}</span>
        <span>{text && text}</span>
      </div>
    </>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

Rating.prototype = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
