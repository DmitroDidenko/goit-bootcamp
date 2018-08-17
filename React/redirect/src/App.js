import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Admin from './Admin';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute'
import {NavLink, Route, Switch} from 'react-router-dom';


class App extends Component {
    state ={
        isLogin: false
    };

    login =() => {
        this.setState({
            isLogin: true
        })
    };

    render() {

        return (
            <div className="App">
                <nav>
                    <p>
                        <NavLink to='/'>Home</NavLink>
                    </p>
                    <p>
                        <NavLink to={'/admin'}>Admin</NavLink>
                    </p>
                </nav>
                <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/login' render ={(props => <Login enterMethod={this.login} isLogin ={this.state.isLogin} {...props}/>)}/>
                    <ProtectedRoute path='/admin' authed={this.state.isLogin} component={Admin}/>
                </Switch>
            </div>

        );
    }
}

export default App;
