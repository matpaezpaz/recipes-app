import { GET_CHEFS, GET_CHEFS_SUCCESS } from "../actionTypes";


const initialState = {
    isChefsLoading: true,
    chefs: []
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
        default:
            return state;
    }
}