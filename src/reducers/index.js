import { combineReducers } from 'redux';
import loaded from './loadstate';
import data from './getdata';

export default combineReducers({
    loaded,
    data
});