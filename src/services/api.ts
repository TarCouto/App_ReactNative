import axios from "axios";

import { AppError } from "@utils/AppError";


//Endreco de IP da Maquina
const api = axios.create({
    baseURL: 'https://sup-rm88383.azurewebsites.net/api/'
});

api.interceptors.response.use((response) => response, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message))
    } else {
        return Promise.reject(error)
    }

})

export { api };