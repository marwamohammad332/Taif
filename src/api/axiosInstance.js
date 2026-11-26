import axios from "axios";
import { useLanguageStore } from "../store/languageStore";

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASEURL,
     
});
axiosInstance.interceptors.request.use((config)=>{
    config.headers['Accept-language'] = useLanguageStore.getState().language;
    return config;
})
export default axiosInstance;