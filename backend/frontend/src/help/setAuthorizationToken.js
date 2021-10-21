import axios from "axios";

const setAuthorizationToken = token => {
  if(token){
    // apply to each request
    axios.defaults.headers.common['Authorization'] = token;
  }else{
    // To delete authorization header
    delete axios.defaults.headers.common['Authorization']
  }
}


export default setAuthorizationToken;