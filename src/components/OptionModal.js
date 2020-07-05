import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        className="modal"
    >
        <h3 className="modal__title">{props.selectedOption}</h3>
        <button className="button button--secondary" onClick={props.onConfirm}>Tak</button>
    </Modal>
);

export default OptionModal;
