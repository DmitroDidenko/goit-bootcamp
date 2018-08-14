import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, minus, reset, incAsync} from '../action/counterAction';
import {galleryAsync} from "../action/galleryAction";
import './Counter.css'

class Counter extends Component {
    // state = {
    //     counter: 0
    // };
    //
    // add = () => {
    //     this.setState(prev => ({
    //         counter: prev.counter + 1,
    //     }))
    // };
    //
    // minus = () => {
    //     this.setState(prev => ({
    //         counter: prev.counter - 1,
    //     }))
    // };
    //
    // reset = () => {
    //     this.setState({counter: 0})
    // };

    rise = () => {
        this.props.asyncPlus(3)
    };


    render() {
        // const {counter} = this.state;
        return (
            <div className='redux'>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={this.props.reload}>reset</button>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.galleryFetch}>FETCH</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        asyncPlus() {
            dispatch(incAsync(3))   // ідентичний запис наступних функцій, але записаний по новому стандарту
        },

        galleryFetch() {
            dispatch(galleryAsync())
        },

        increment: function () {
            dispatch(add())
        },

        decrement: function () {
            dispatch(minus())
        },

        reload: function () {
            dispatch(reset())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);













