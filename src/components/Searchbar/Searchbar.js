import { useState } from 'react';
import './Searchbar.scss';
import { toast } from 'react-toastify';

const Searchbar = (props) => {
  const { onSubmit } = props;
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value)
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Введите корректный запрос!');
      return
    }

    onSubmit(query);
  }


  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

export default Searchbar;
