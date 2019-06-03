import { GET_CHEFS, GET_CHEFS_SUCCESS, GET_CHEF, GET_CHEF_SUCCESS } from "../actionTypes";


const initialState = {
    isChefsLoading: true,
    isChefLoading: true,
    chefs: [],
    chef: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHEFS: {
            return {
                ...state,
                isChefsLoading: true,
                chefs: []
            };
        }
        case GET_CHEFS_SUCCESS: {
            return {
                ...state,
                isChefsLoading: false,
                chefs: action.chefs
            };
        }
        case GET_CHEF : {
            return {
                ...state,
                isChefLoading: true,
                chef: {}
            }
        }
        case GET_CHEF_SUCCESS : {
            return {
                ...state,
                isChefLoading: false,
                chef: action.chef
            }
        }
        default:
            return state;
    }
}