import axiosinstance from "@/config/axiosinstance.js";
import { ref } from "vue";
const error = ref(null);
const isPending = ref(false);
async function signIn(username, password) {
    isPending.value = true;
    error.value = null;
    try {
        const response = await axiosinstance.post("users/login", { username, password });
        localStorage.setItem('at-token', response.data.accessToken);
        localStorage.setItem('rf-token', response.data.refreshToken);
        return response;
    } catch (err) {
        error.value = "err.response.data.message;"
    }
    finally {
        isPending.value = false;
    }
}
async function signUp(username, password, confirmpassword, email) {
    isPending.value = true;
    error.value = null;
    try {
        const response = await axiosinstance.post("users", { username, password, confirmpassword, email });
        return response;
    } catch (err) {
        error.value = err.response.data.message;
    }
    finally {
        isPending.value = false;
    }
}
async function getAllDistrict(code) {
    try {
        const response = await axiosinstance.get("location/district/" + code);
        return response.data.districts;
    }
    catch (e) {
        console.log(e)
    }
}
export function useAuth() {
    return {
        error, isPending, signIn, signUp,getAllDistrict
    }
}