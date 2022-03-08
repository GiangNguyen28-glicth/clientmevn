import axiosinstance from "@/config/axiosinstance.js";
const cart = {
    namespaced: true,
    state() {
        return {
            listCart: [],
            url:null,
        }
    },
    getters: {
        totalPrice(state) {
            if (state.listCart.length == 0) {
                return;
            }
            var result = state.listCart.reduce(function (acc, obj) {
                return acc + obj.product.price * obj.quantity;
            }, 0);
            return result;
        }
    },
    actions: {
        async getListCart({ commit }) {
            const response = await axiosinstance.get("cart", {
                withCredentials: true,
            });

            commit("SET_LISTCART", response.data);
        },
        async addtoCart({ commit }, { id, quantity }) {
            await axiosinstance.get("cart/" + id + "/" + quantity, {
                withCredentials: true,
            });
            commit("SET_CART");
        },
        async deleteProduct({ commit }, id) {
            const response = await axiosinstance.delete("cart/" + id, {
                withCredentials: true,
            });
            commit("DELETE_CART", response.data);
        },

        async updateCart({ commit }, { id, quantity }) {
            const response = await axiosinstance.get("cart/number/" + id + "/" + quantity, {
                withCredentials: true,
            });
            commit("UPDATE_CART", response.data);
        },
        async checkout({ commit }) {
            const response = await axiosinstance.get("paypal/checkout",{
                withCredentials: true,
            });
            commit("CHECKOUT_CART",response.data);
        }
    },
    mutations: {
        SET_LISTCART(state, listcartPayload) {
            state.listCart = listcartPayload;
        },
        SET_CART(state) {
            console.log(state.listCart)
        },
        DELETE_CART(state, listcartPayload) {
            state.listCart = listcartPayload;
        },
        UPDATE_CART(state, listcartPayload) {
            state.listCart = listcartPayload;
        },
        CHECKOUT_CART(state,urlPayload) {
            state.url = urlPayload;
        }
    }
}
export default cart;