import React from 'react';
import Modal from './Modal';


const Registration = ({close, id}) => {
    return (
        <div>
            <Modal id={id} close={close}>
                <h2>Registration</h2>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Mail'/>
                <input type="password" placeholder='Password'/>
                <button>Save</button>
            </Modal>
        </div>
    );
};

export default Registration;