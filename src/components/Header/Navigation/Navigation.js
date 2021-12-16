import PropTypes  from 'prop-types';
import s from './Navigation.module.css';
import Logo from '../Logo';
import NavigationItem from '../NavigationItem';

export default function Navigation(props) {
  return (
  <nav className={s.nav}>
    <Logo/>            
        <ul className={s.nav__list}>
          <NavigationItem title="home"/>
          <NavigationItem title="my library"/>
        </ul>

  </nav>
  )
  
}






