import {
    F_PRODUCTS_FETCHED,
    POP_PRODUCTS_FETCHED
} from "../constant/ActionTypes";


const INIT_STATE = {
    fProducts: [],
    popProducts: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case F_PRODUCTS_FETCHED: {
            let fProductsClone = state.fProducts.slice(0);
            fProductsClone = fProductsClone.concat(action.payload);
            return {
                ...state,
                fProducts: fProductsClone
            }
        }
        case POP_PRODUCTS_FETCHED: {
            let popProductsClone = state.popProducts.slice(0);
            popProductsClone = popProductsClone.concat(action.payload);
            return {
                ...state,
                popProducts: popProductsClone
            }
        }
        default:
            return state;
    }
}
