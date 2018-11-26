import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({close, children, id}) => {
    return (
        <div className='overlay' id={id} onClick={close}>
            <div className='modal'>
                <p className="close" id={id} onClick={close}>&#120;</p>
                {children}
            </div>
        </div>
    );
};

export default Modal;
