export const add = value => ({type: 'ADD', data: value});
export const del = id => ({type: 'DEL', data: id});
export const change = (e) => ({type: 'CHANGE', data: e});
