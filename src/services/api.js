import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://reqres.in/api/'
})

export const requestUsers = (page) =>{
    return apiInstance.get(`users?page=${page}&per_page=3`).then(responce => responce.data);
}