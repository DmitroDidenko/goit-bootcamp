import React from 'react';
import Modal from './Modal';


const Profile = ({id, close}) => {
        return (
            <div>
                <Modal id={id} close={close}>
                    <h2>Profile</h2>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Age'/>
                    <input type="text" placeholder='Last Name'/>
                    <input type="text" placeholder='Country'/>
                    <input type="text" placeholder='City'/>
                    <input type="email" placeholder='Mail'/>
                </Modal>
            </div>
        );
};

export default Profile;
