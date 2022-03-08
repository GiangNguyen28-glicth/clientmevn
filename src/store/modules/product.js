import axiosinstance from "@/config/axiosinstance.js";
const product = {
    namespaced: true,
    state() {
        return {
            productdata:null,
            products: []
        }
    },
    getters: {
    },
    actions: {
        async getAllProducts({ commit }) {
            try {
                const response = await axiosinstance.get("products");
                commit("SET_PRODUCTS", response.data);
            } catch (e) {
                console.log(e);
            }
        },
        async findOneProduct({commit},{id}){
            try{
                const response = await axiosinstance.get("products/"+id);
                commit("FIND_ONE_PRODUCT",response.data)
            }
            catch (e){
                console.log(e);
            }
        }
    },
    mutations: {
        SET_PRODUCTS(state, productpayload) {
            state.products = productpayload;
        },
        FIND_ONE_PRODUCT(state,productdata){
            state.productdata = productdata;
        }
    }
}
export default product;