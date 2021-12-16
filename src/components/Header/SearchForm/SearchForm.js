import PropTypes from 'prop-types';
import s from './SearchForm.module.css';
import IconSvg from '../../Icons/Icons';
 

export default function SearchForm(props) {

  return (
    <form className={s.header__search__form}>
          <input
            name="query"
            className={s.form__input}
            type="text"
            placeholder="Search movie"
            autoComplete="off" />

          <label className={s.form__input__label}>Search movie</label>

          <div type="submit" className={s.search__btn}>
                <IconSvg
                  id="search"
                  color="#fff"
                  size="12"
                  className="search"
                  />     
          </div>

          <p className={s.notification}>
            Search result not successful. Enter the correct movie name and try again
          </p>
    </form>


  )
  
}




