import React, {Component} from 'react';
import Gallery from './Gallery';
import Category from './Category'
import {connect} from 'react-redux';
import {input} from './action/inputAction';
import AuthorList from './AuthorList/AuthorList'
import './App.css';
import {galleryAsync} from "./action/galleryAction";

class App extends Component {

    // componentDidMount() {
    //     axios.get('./task')
    //         .then(({status, data}) => {
    //
    //         })
    // }

    render() {
        return (
            <div className='App'>
                <form className='form'>
                    <input className='inp'
                           type="text"
                           value={this.props.input}
                           onChange={this.props.change}/>
                    <button className='btn'>SEND</button>
                </form>
                <Category/>
                <Gallery/>
                <AuthorList/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gallery: state.gallery
    }
}

function mapDispatchToProps(dispatch) {
    return {
        change(){
            dispatch(galleryAsync())
        },
        increment(){
            dispatch(input())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
