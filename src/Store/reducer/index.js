import Product from './product';
import Categories from './category';
import { combineReducers } from 'redux';

export default combineReducers({
    product: Product,
    categories: Categories

});