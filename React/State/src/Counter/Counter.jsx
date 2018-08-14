import React from 'react';
// import PropTypes from 'prop-types'

// import React, {Component} from 'react';  // другий спосіб
// class NewCounter extends Component // другий спосіб

class NewCounter extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         counterStart: 0,
    //     };
    //     this.plus = this.plus.bind(this);
    //     this.minus = this.minus.bind(this);
    // }

    state = {
        counterStart: 0,
    };

    // setState(obj або function(prevState), callback()) приймає обовязковим параметром функцію, обєкт.
    plus= () => {
        this.setState(prevState =>({counterStart: prevState.counterStart +1}))
    };

    minus = () => {
        this.setState(prevState =>({counterStart: prevState.counterStart -1}))
    };

    // static propTypes = {
    //     start: PropTypes.number,
    // };
    // static defaultProps = {
    //     start: 100,
    // };

    render() {
        const {counterStart} = this.state;
        return (
            <div>
                <p>{counterStart}</p>
                <button onClick={this.plus}>Plus</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default NewCounter;
