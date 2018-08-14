import React from 'react';
import {connect} from 'react-redux';
import {gallery} from './selector/gallerySelector'
import {galleryLength} from './selector/gallerySelector'

const Gallery = ({gallery, galleryLength}) => {
    return (
        <div>
            <h2>Gallery items count {galleryLength}</h2>
            {gallery.map(el => <img src={el.previewURL} alt="picture"/>)}
        </div>
    );
};

function MSTP(state) {
    return {
        gallery: gallery(state),
        galleryLength: galleryLength(state),
    }
}

export default connect(MSTP)(Gallery);



