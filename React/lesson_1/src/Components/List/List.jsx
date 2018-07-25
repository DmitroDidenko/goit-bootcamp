import React from 'react'
import PropTypes from 'prop-types';
import './index.css'

const List = ({arrNumbers}) => {
    return (
        <ul className='list'>
            {arrNumbers.map(el => <li key={el} className='list__item'>{el}</li>)}
        </ul>
    )
};

List.propTypes = {
    arrNumbers: PropTypes.arrayOf(PropTypes.number)
};

export default List