import PropTypes from 'prop-types';
import s from './Header.module.css';

import Navigation from './Navigation';
import SearchForm from './SearchForm';
import Button from '../Button';

const Header = (props) => {
  return (
    <header className={s.header__container}>       
        <Navigation/>
        <SearchForm/>
        <Button title="Watched"/>
        <Button title="Queue"/>        
    </header >
  )

}


Header.propTypes = {

};

export default Header;