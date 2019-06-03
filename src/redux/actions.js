import axios from 'axios';
import { GET_RECIPES, GET_RECIPES_SUCCESS, GET_RECIPES_ERROR, GET_CHEFS, GET_CHEFS_SUCCESS, GET_CHEFS_ERROR } from './actionTypes';
import { API_ENDPOINT_BASE } from '../constants';


export const getRecipes = () => {
    return dispatch => {
        dispatch({
            type: GET_RECIPES
        });
        return axios.get(`${API_ENDPOINT_BASE}/recipes`)
            .then(response => {
                dispatch({
                    type: GET_RECIPES_SUCCESS,
                    recipes: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: GET_RECIPES_ERROR,
                    error: error.response
                });
            });
    }
};

export const getChefs = () => {
    return dispatch => {
        dispatch({
            type: GET_CHEFS
        });
        return axios.get(`${API_ENDPOINT_BASE}/chefs`)
            .then(response => {
                dispatch({
                    type: GET_CHEFS_SUCCESS,
                    chefs: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: GET_CHEFS_ERROR,
                    error: error.response
                });
            });
    }
};