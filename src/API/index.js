import axios from "axios";

export const getProducts = () => axios.get("https://peticiones.online/api/products")