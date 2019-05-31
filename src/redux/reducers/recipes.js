import { GET_RECIPES, GET_RECIPES_SUCCESS } from "../actionTypes";


const initialState = {
    isRecipesLoading: true,
    recipes: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES: {
            return {
                ...state,
                isRecipesLoading: true,
                recipes: []
            };
        }
        case GET_RECIPES_SUCCESS: {
            return {
                ...state,
                isRecipesLoading: false,
                recipes: action.recipes
            };
        }
        default:
            return state;
    }
}