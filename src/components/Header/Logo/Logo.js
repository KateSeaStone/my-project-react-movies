import PropTypes from 'prop-types';
import s from './Logo.module.css';
import IconSvg from '../../Icons/Icons';

const Logo = (props) => {
  return (
    <>
      <a href="./index.html" className={s.logo}>
            <IconSvg
            id="film"
            color="#818181"
            size="24"
            className="film"
            />
            <span className={s.logo__word}>Filmoteka</span>
      </a>
    </>    
  )

}


Logo.propTypes = {

};

export default Logo;





