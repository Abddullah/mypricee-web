import {
    CATEGORIES_FETCHED
} from "../constant/ActionTypes";


const INIT_STATE = {
    categories: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CATEGORIES_FETCHED: {
            return {
                ...state,
                categories: action.payload
            }
        }

        default:
            return state;
    }
}
