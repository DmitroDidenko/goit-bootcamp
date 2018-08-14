import {combineReducers} from 'redux';
import counter from './counterReduce';
import gallery from './galleryReducer';

const rootReducer = combineReducers({counter, gallery});

export default rootReducer;