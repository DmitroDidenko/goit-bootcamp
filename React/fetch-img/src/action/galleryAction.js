import axios from 'axios';

export function add(data) {
    return {
        type: 'LOAD',
        data,
    }
}

const END_POINT = 'https://pixabay.com/api/?key=';
const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';

function getGallery() {
    return axios.get(`${END_POINT}${API_KEY}&category=food&order=popular&per_page=10`)
}

export const galleryAsync = () => dispatch => {
    getGallery().then(result => dispatch(add(result.data.hits)))
};