import axios from "axios";

const getCategries = async ()=>{
    const response = await axios.get(`https://knowledgeshop.runasp.net/api/Categories?limit=100`,{
      headers :{
        'Accept-Language':'en'
      }});
      return response.data.response.data;
  } 
  export default getCategries;