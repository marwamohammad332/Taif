import axios from "axios";
import axiosInstance from "../api/axiosInstance";

const getCategries = async ()=>{
  const response = await axiosInstance.get(`Categories?limit=100`);
   
      return response.data.response.data;
  } 
  export default getCategries;