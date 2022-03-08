import axiosinstance from "@/config/axiosinstance.js";
const category = {
    namespaced: true,
    state() {
        return {
            categories: []
        }

    },
    getters: {

    },
    actions: {
        async getAllCategories({ commit }) {
            try {
                const response = await axiosinstance.get("categories");
                commit("SET_CATEGORIES", response.data)
            } catch (e) {
                console.log(e)
            }
            finally {
                console.log("Action finally")
            }

        },
    },
    mutations: {
        SET_CATEGORIES(state, categoryPayload) {
            state.categories = categoryPayload;        }
    }
}

export default category;