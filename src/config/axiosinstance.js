import Axios from "axios";

const axiosinstance = Axios.create();
axiosinstance.defaults.baseURL = "http://localhost:3000/api/v1";
axiosinstance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('at-token');
axiosinstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const { config, response } = error;
        const { statusCode, message } = response.data;
        if (statusCode && statusCode === 401) {
            if (message && message === 'ExpiredToken') {
                const { accessToken, refreshToken } = await getrefreshToken();
                if (accessToken) {
                    localStorage.setItem("at-token", accessToken);
                    localStorage.setItem("rf-token", refreshToken);
                    config.headers.Authorization='Bearer ' + localStorage.getItem('at-token');
                    return axiosinstance(config)
                }
            }
        }
        return Promise.reject(error);
    },
);
async function getrefreshToken() {
    try {
        const token = localStorage.getItem('rf-token');
        const response = await axiosinstance.get("users/refreshtoken", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    } catch (e) {
        console.log("Loi o refresh")
        console.log(e.message)
    }
}
export default axiosinstance;