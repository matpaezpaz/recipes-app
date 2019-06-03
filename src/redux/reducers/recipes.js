import { GET_RECIPES, GET_RECIPES_SUCCESS, GET_RECIPE, GET_RECIPE_SUCCESS } from "../actionTypes";


const initialState = {
    isRecipesLoading: true,
    isRecipeLoading: true,
    recipes: [],
    recipe: {}
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
        case GET_RECIPE: {
            return {
                ...state,
                isRecipeLoading: true,
                recipe: {}
            }
        }
        case GET_RECIPE_SUCCESS: {
            return {
                ...state,
                isRecipeLoading: false,
                recipe: action.recipe
            }
        }
        default:
            return state;
    }
}