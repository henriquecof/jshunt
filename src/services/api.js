import axios from "axios";

const api = axios.create({baseURL: 'hpps://rocketseat-node.herokuapp.com/api'});

export default api;