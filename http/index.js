import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const http = axios.create({
  baseURL: "http://localhost:8080",
});

export default http;