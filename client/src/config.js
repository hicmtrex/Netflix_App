import axios from "axios"


 const axiosInstance = axios.create({
     baseURL : "https://netflix-hicm.herokuapp.com/api" 
})


export default axiosInstance;