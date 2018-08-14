import {combineReducers} from 'redux';
import gallery from './galleryreducer';
import input from './inputReducer';

const rootReducer = combineReducers({gallery, input});
export default rootReducer