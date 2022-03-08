import { createStore } from 'vuex'
import category from './modules/category';
import product from './modules/product';
import location from './modules/location';
import cart from './modules/cart';
// Create a new store instance.
const store = createStore({
    modules:{
        category,
        product,
        location,
        cart
    }
})
export default store;