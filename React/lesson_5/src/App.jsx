import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Order from './Order';
import Profile from './Profile';
import Registration from './Registration';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            registration: false,
            profile: false,
            order: false,
            isActive: true,
        };
        this.btnInputRef = React.createRef();
    }


    showModal = (e) => {
        console.log(this.btnInputRef.current);
        let id = e.target.id;
        e.stopPropagation();
        if (e.target.className === 'overlay' || e.target.className === 'btn' || e.target.className === 'close') {
            this.setState(prev => ({
                [id]: !prev[id],
                isActive: !prev.isActive,
            }))
        }
    };

    render() {
        const {registration, profile, order, isActive} = this.state;
        return (
            <div>
                <button className='btn' id='registration' onClick={this.showModal} ref={this.btnInputRef}>registration</button>

                {isActive && <div>
                    {/*<button className='btn' id='registration' onClick={this.showModal}>registration</button>*/}
                    <button className='btn' id='profile' onClick={this.showModal}>profile</button>
                    <button className='btn' id='order' onClick={this.showModal}>order</button>
                </div>}
                {registration && <Registration close={this.showModal} id='registration'/>}
                {profile && <Profile close={this.showModal} id='profile'/>}
                {order && <Order close={this.showModal} id='order'/>}
            </div>
        );
    }
}

export default App;
