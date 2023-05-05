import axios from "axios";

console.log(import.meta.env.VITE_BASE_URL);
const webClient = axios.create({
  baseURL: `http://${import.meta.env.VITE_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { webClient };
