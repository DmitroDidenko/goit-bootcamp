import {combineReducers} from 'redux';
import {addList} from './addReducers'
import {inputList} from './inputReducers'

const root = combineReducers([addList, inputList]);
export default root;