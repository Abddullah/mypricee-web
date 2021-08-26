import { CATEGORIES_FETCHED } from '../constant/ActionTypes';
import axios from 'axios';
import { categoryBaseURL } from '../../config/baseUrl';

export function fetchCategories() {
    return async dispatch => {
        let options = {
            method: 'get',
            url: `${categoryBaseURL}/api/v1/get-custom-categories/`,
        };
        try {
            let categories = await axios(options);
            dispatch({ type: CATEGORIES_FETCHED, payload: categories.data })
        }
        catch (e) {
            console.log('error occured in productJS action, line 16', e);
        }
    }
}
