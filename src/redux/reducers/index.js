import { combineReducers } from 'redux';
import recipes from './recipes';
import chefs from './chefs';

export default combineReducers({ recipes , chefs });