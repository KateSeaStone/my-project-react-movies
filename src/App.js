import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import fetchImages from './api/imagesApi';
import ImageGallery from './components/ImageGallery';

const App = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    if (query !== '') {
      fetchImages(query, currentPage)
        .then(data => {
          setImages(images.concat(data.hits));
          setIsLoading(false);
          if (currentPage > 0 && data.hits.length > 0) {
            setIsScroll(true);
          }
        })
        .catch(error => setError({ error }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, currentPage])

  useEffect(() => {
    if (isScroll) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
      setIsScroll(false);
    }

  }, [isScroll])

  const handleFormSubmit = newQuery => {
    if (!((newQuery === query) && (currentPage === 1))) {
      setImages([]);
      setError(null);
      setCurrentPage(1);
      setQuery(newQuery);
      setIsLoading(true);
    };
  }

  const handleButtonClick = () => {
    setCurrentPage(currentPage + 1);
    setIsLoading(true);
  }

  return (
    <Container>
      {error && <h2>Opps! Something went wrong!</h2>}
      <Searchbar onSubmit={handleFormSubmit} />

      {images.length > 0 && (
        <ImageGallery
          images={images}
          handleButtonClick={handleButtonClick}
          isLoading={isLoading}
        />)}

      <ToastContainer position="top-center" autoClose={4000} />
    </Container>
  )

}

export default App;



