import React from 'react';
import './Line.css'
import {Switch, Route, NavLink} from 'react-router-dom';
import Card from './Card'

const Line = ({data, match}) => {
    return (
        <Switch>
            <Route path={`${match.path}/:lastname`}
                   render={props => {
                       const result = data.find(el => el.lastname === props.match.params.lastname);
                       return <div>
                           <p>{result.name}</p>
                           <p>{result.lastname}</p>
                       </div>
                   }}>
            </Route>
            <Route>
                <div className='line'>
                    {data.map(el => <NavLink to={`${match.path}/${el.lastname}`} key={el.id}>
                            <Card name={el.name}
                                  lastname={el.lastname}
                                  number={el.number}
                                  photo={el.photo}
                                  country={el.country}/>
                        </NavLink>
                    )}
                </div>
            </Route>
        </Switch>
    );
};

export default Line;
