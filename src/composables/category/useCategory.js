import axiosinstance from "@/config/axiosinstance.js";
import { ref } from "vue";
const error=ref(null);
const isPending=ref(false);
async function usegetCategories(){
    isPending.value=true;
    error.value=null;
    try{
        const response= await axiosinstance.get("categories");
        return response;
    }catch(e){
        error.value=e.response.data.message;
    }
    finally{
        isPending.value=false;
    }
}
export function useCategory(){
    return{
        usegetCategories,
        error,
        isPending
    }
}