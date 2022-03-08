import axiosinstance from "@/config/axiosinstance.js";
import { ref } from "vue";
const error=ref(null);
const isPending=ref(false);
async function addProduct(productname,quantity,url,categoryname){
    try {
       
        const response= await axiosinstance.post("products",{productname,quantity,url,categoryname});
        return response;
    } catch (err) {
        console.log(err);
        error.value=err.response.message;
    }
    finally{
        isPending.value=false;
    }
}
export function useProduct(){
    return{
        error,isPending,addProduct
    }
}