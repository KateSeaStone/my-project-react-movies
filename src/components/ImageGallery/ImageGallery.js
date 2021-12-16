import { useState } from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Pagination from '../Pagination/Pagination';
//import Modal from '../Modal/Modal';
//import Button from '../Button/Button';
//import Loader from '../Loader/Loader';

const ImageGallery = (props) => {
  // const { images, handleButtonClick, isLoading } = props;

  // const [showModal, setShowModal] = useState(false);
  // const [largeImageURL, setLargeImageURL] = useState('');

  // const openModal = (imageUrl) => {
  //   setShowModal(true);
  //   setLargeImageURL(imageUrl);
  // }

  // const closeModal = () => {
  //   setShowModal(false);
  // }

  return (
    <>
      <ul className="ImageGallery">
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
      </ul>

      <Pagination />

      {/* {isLoading && <Loader />}

      {!isLoading && <Button handleClick={handleButtonClick} />}

      {showModal && <Modal largeImageURL={largeImageURL} onClose={closeModal} />} */}
    </>
  )

}

// ImageGallery.propTypes = {
//   images: PropTypes.array.isRequired,
// };

export default ImageGallery;





