import React from 'react';
import Modal from './Modal';

const Order = ({id, close}) => {
    return (
        <div>
            <Modal id={id} close={close}>
                <h2>Order</h2>
                <input type="text" placeholder='Amount'/>
                <input type="text" placeholder='Color'/>
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='Phone'/>
                <input type="email" placeholder='Mail'/>
            </Modal>
        </div>
    );
};

export default Order;