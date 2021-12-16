import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { handleClick, title } = props;
  return (
    <button
      className={s.button}
      type="button"
      onClick={handleClick}
    >{title}</button>
  )
};


Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;