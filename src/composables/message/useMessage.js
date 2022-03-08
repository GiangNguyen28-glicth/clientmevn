import {  ref } from "vue";
import socket from "@/config/socket";
const error = ref(null);
const isPending = ref(false);
const temp = ref(false);
const users2=ref([]);
async function changeStatus() {
    try {
        temp.value = !temp.value;
    } catch (err) {
        console.log(err);
    }
    finally {
        isPending.value = false;
    }
}
async function getValue() {
    try {
        await socket.on("users", (data) => {
            users2.value = data;
            console.log("Socket")
        })
    } catch (e) {
        console.log(e)
    }
    finally {
        console.log("Finally", users2.value)
    }


    return users2.value;
}
export function useMessage() {
    return {
        error, isPending, changeStatus, temp, getValue,users2
    }
}