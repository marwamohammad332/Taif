import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";
import { useLanguageStore } from "../store/languageStore";

const authAxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    

});

authAxiosInstance.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
        config.headers['Accept-language'] = useLanguageStore.getState().language;
    
    return config
});
export default authAxiosInstance;