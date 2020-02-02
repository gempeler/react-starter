import axios from "axios";

const AXIOS = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});

export default AXIOS;
