import PropTypes from 'prop-types';
import s from './NavigationItem.module.css';

export default function NavigationItem(props) {
  const {title} = props;
  return (
    <li className={s.nav__item}>
        <a href="#">{title}</a>
    </li>

  )
}
