import axios from "axios";

const API = axios.create({
  baseURL: "https://team-task-manager-production-e6e5.up.railway.app/",
  withCredentials: true
});

export default API;