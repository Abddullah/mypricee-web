import { F_PRODUCTS_FETCHED, POP_PRODUCTS_FETCHED } from '../constant/ActionTypes';
import axios from 'axios';
import { productBaseURL } from '../../config/baseUrl';

export function fetchFeatureProducts(productLength) {
    return async dispatch => {
        let options = {
            method: 'post',
            url: `${productBaseURL}/api/v1/get-products-listing/`,
            data: { skipRange: productLength, feature: true }
        };
        try {
            let fProducts = await axios(options);
            console.log(fProducts, "fProducts_In_action")
            dispatch({ type: F_PRODUCTS_FETCHED, payload: fProducts.data })
        }
        catch (e) {
            console.log('error occured in productJS action, line 16', e);
        }
    }
}

export function fetchPopularProducts(productLength) {
    return async dispatch => {
        let options = {
            method: 'post',
            url: `${productBaseURL}/api/v1/get-products-listing/`,
            data: { skipRange: productLength, feature: false, popular: true }
        };
        try {
            let popProducts = await axios(options);
            console.log(popProducts, "popProducts_In_action")
            dispatch({ type: POP_PRODUCTS_FETCHED, payload: popProducts.data })
        }
        catch (e) {
            console.log('error occured in productJS action, line 36', e);
        }
    }
}
