/**
 * src/api/http.js
 */
 import axios from "axios";
 import qs from "qs";
 import packageJson from "../../../package.json";
 
 // axios instance
 const instance = axios.create({
   baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}`,
   paramsSerializer(params) {
     return qs.stringify(params, { indices: false });
   },
 });
 
 // request header
 instance.interceptors.request.use(
   (config) => {
     config.headers = {
       Accept: "application/json",
       "Content-Type": "application/json",
       Authorization: `token`,
       platform: "reactreduxtoolkit",
       version: packageJson.version,
     };
 
     return config;
   },
   (error) => Promise.reject(error)
 );
 
 //parse error response
 function parseError(messages) {
   if (messages) {
     if (messages instanceof Array) {
       return Promise.reject({ messages });
     }
     return Promise.reject({ messages: [messages] });
   }
   return Promise.reject({ messages: ["got errors"] });
 }
 
 //parse response
 function parseBody(response) {
   if (response.status === 200) {
     return response;
   } else {
     return parseError(response.data.messages);
   }
 }
 
 // response parse
 instance.interceptors.response.use(
   (response) => parseBody(response),
   (error) => {
     if (error.response && error.response.status === 401) {
       localStorage.removeItem("token");
     } else if (error.response && error.response.status === 500) {
       return Promise.reject(error.response);
     } else return Promise.reject(error);
   }
 );
 
 export const http = instance;
 
 export default http;
 