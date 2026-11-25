import axios from "axios";
import axiosInstance from "../api/axiosInstance";

const getProducts = async ()=>{
  const response =  await axiosInstance.get(`Products?limit=100`)
   
      return response.data.response.data;
  } 
  export default getProducts;