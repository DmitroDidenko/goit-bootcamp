import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore( rootReducers, DevTools, applyMiddleware(thunk) );

export default store;