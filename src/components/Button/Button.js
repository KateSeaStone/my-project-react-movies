import './Button.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { handleClick } = props;
  return (
    <button
      className="loadMoreBtn"
      type="button"
      onClick={handleClick}
    >Load more</button>
  )
};


Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;