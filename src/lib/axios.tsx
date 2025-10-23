
import axios from "axios";

const BASE_URL=import.meta.env.MODE === "development" ? "https://freshmanexam-backend.onrender.com/api" : "/api"

const api = axios.create({
    baseURL: BASE_URL, // Base URL for all API requests
    withCredentials: true,                // Include cookies with requests (useful for sessions/auth)
  });
  
export default api
