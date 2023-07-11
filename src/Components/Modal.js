import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '52%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    padding:'0px',
    borderWidth:'0px'
  },
};

export const ModalComponent = ({ children, isOpen = false, closeModal = () => {} }) => {

  return (
    <div>
      <Modal
        isOpen={isOpen}
        overlayClassName={'bg-transparent'}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        {children}
      </Modal>
    </div>
  );
}