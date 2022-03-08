import axiosinstance from "@/config/axiosinstance.js";
const location = {
    namespaced: true,
    state(){
        return{
            province:[],
            district:[],
            wards:[]
        }
    },
    getters:{
        getdistricts(state){
            console.log(state.district)
            return state.district;
        }
    },
    actions:{
        async getAllLocation({commit}){
            try {
                const response = await axiosinstance.get("location/province");
                commit("SET_PROVINCE", response.data);
            } catch (e) {
                console.log(e);
            }
        },
        async getAllDistrict(context,code){
            try{
                const response = await axiosinstance.get("location/district/"+code);
                context.commit("SET_DISTRICT",response.data.districts);
            }
            catch(e){
                console.log(e)
            }
        },
        async getAllWards({commit},code){
            try{
                const response = await axiosinstance.get("location/wards/"+code);
                commit("SET_WARDS",response.data.wards);
            }
            catch(e){
                console.log(e);
            }
        }
    },
    mutations:{
        SET_PROVINCE(state,provincePayload){
            state.province=provincePayload;
        },
        SET_DISTRICT(state,districtPayload){
            console.log("Commit Mutations")
            state.district = districtPayload;
        },
        SET_WARDS(state,wardsPayload){
            state.wards=wardsPayload;
        }
    }

}
export default location;