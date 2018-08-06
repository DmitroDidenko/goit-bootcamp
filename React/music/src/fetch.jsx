import axios from 'axios'

export function fetchData(url) {
    return axios.get(url)
        .then(({status, data}) => {
            if (status === 200) {
                return data;
            }
        })
}

export function getLocal(key) {
    return JSON.parse(localStorage.getItem(key)) !== null ? JSON.parse(localStorage.getItem(key)) : [];
}

