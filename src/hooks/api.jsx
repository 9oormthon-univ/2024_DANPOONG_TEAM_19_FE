import axios from "axios";

const API = axios.create({
  baseURL: "http://3.38.149.142/api/core",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpZDEyMzQiLCJpYXQiOjE3MzIyNDkwMDYsImV4cCI6MTczMjI1MDgwNn0.Yq0bOFjmNfNg7NCfnshgzbZ3pBooX3AbbQhuDWKNZR0`,
  },
});

export default API;
