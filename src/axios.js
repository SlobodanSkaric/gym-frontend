import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
});

axiosInstance.interceptors.request.use((reqConf) =>{
    reqConf.headers.Authorization = `Bearer ${localStorage.getItem("USER_TOKEN")}`;
    return reqConf;
});


axiosInstance.interceptors.response.use((res) =>{
    return res;
}, error => {
    if(error.response ){
        localStorage.removeItem("USER_TOKEN");

        return error.response
    }

    throw error
});

export default axiosInstance;

