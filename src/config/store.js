

import { createStore, combineReducers } from 'redux';

import cartreducer from '../features/cart/reducer'
import productsReducer from '../../src/features/product-listing/reducer'
import { reducer as formReducer} from  'redux-form';

const rootReducer = combineReducers({
    cart: cartreducer,
    products: productsReducer,
    form: formReducer
}); 

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;