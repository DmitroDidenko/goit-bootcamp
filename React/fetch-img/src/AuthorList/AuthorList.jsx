import React from 'react';
import {connect} from 'react-redux';
import {galleryLength} from '../Gallery'
import {galleryAuthors} from "../selector/gallerySelector";
import './AuthorList.css'

const AuthorList = ({authors}) => {
    return (
        <ul className='ul'>
            {authors.map(el => <li className='li' key={el}>{el}</li>)}
        </ul>
    );
};

function MSTP(state) {
    return {
        authors: galleryAuthors(state)
    }

}

export default connect(MSTP)(AuthorList);
