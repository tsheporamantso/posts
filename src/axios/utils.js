import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json",
  },
});

export default customFetch;
