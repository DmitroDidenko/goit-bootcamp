import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import Line from './Line';


const Team = ({match, data}) => {
    return (
        <div>
            <h2>First Team</h2>
            <nav className='nav'>
                <NavLink to={`${match.path}/goalkeepers`}>GOALKEEPERS</NavLink>
                <NavLink to={`${match.path}/defenders`}>Defenders</NavLink>
                <NavLink to={`${match.path}/midfielders`}>Midfielders</NavLink>
                <NavLink to={`${match.path}/forwards`}>Forwards</NavLink>
            </nav>
            <Switch>
                <Route path={`${match.path}/goalkeepers`} render={props => <Line {...props} data={data.GK}/>}/>
                <Route path={`${match.path}/defenders`} render={props => <Line {...props} data={data.DF}/>}/>
                <Route path={`${match.path}/midfielders`} render={props => <Line {...props} data={data.MD}/>}/>
                <Route path={`${match.path}/forwards`} render={props => <Line {...props} data={data.FW}/>}/>
            </Switch>
        </div>
    );
};

export default Team;


