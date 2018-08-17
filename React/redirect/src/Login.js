import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    render() {
        console.log(this.props);

        if(this.props.isLogin){
            return(
                <Redirect to = {this.props.location.state.from}/>
            )
        }
        return (
            <div>
                <h2>Login page</h2>
                <button onClick={this.props.enterMethod}>Push me</button>
            </div>
        )
    }
}

export default Login;