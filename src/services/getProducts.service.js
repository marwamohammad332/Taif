import axios from "axios";

const getProducts = async ()=>{
    const response = await axios.get(`https://knowledgeshop.runasp.net/api/Products`,{
      headers :{
        'Accept-Language':'en'
      }});
      return response.data.response.data;
  } 
  export default getProducts;