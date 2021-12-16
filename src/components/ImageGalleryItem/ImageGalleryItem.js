import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.scss';
import img1 from '../../img/card1.png';

const ImageGalleryItem = (props) => {
  //const {  url } = props;
  return (
    <li className="ImageGalleryItem">
      <img src={img1} alt="" />
      <h3>GREYHOUND</h3>
      <div>Drama, Action | 2020</div>
    </li>
  )

}

// ImageGalleryItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   webformatURL: PropTypes.string,
//   largeImageURL: PropTypes.string,
//   showModal: PropTypes.func.isRequired,
// };


export default ImageGalleryItem;