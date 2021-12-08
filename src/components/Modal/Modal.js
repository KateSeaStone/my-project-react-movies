//import { Component } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.body;

const Modal = (props) => {
  const { largeImageURL, onClose } = props;

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      window.removeEventListener('keydown', handleKeyDown)
    }

  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  }

  return createPortal(
    <div className="Overlay" onClick={handleOverlayClick} >
      <div className="Modal" >
        <img
          src={largeImageURL}
          alt={largeImageURL}
          onClick={onClose} />
      </div>
    </div>, modalRoot);
}


// export default class Modal extends Component {

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown)
//     //console.log(modalRoot);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown)
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   }

//   handleOverlayClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   }

//   clickOnImage = () => this.props.onClose();


//   render() {

//     return createPortal(
//       <div className="Overlay" onClick={this.handleOverlayClick} >
//         <div className="Modal" >
//           <img
//             src={this.props.largeImageURL}
//             alt={this.props.largeImageURL}
//             onClick={this.clickOnImage} />
//         </div>
//       </div>, modalRoot);
//   }


// }

export default Modal;


