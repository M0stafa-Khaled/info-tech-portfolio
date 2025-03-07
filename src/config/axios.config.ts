import axios from "axios";

const axiosInstanceAPI = axios.create({
  baseURL: `https://info-tech-web.com/api`,
  headers: {
    Accept: "application/json",
  },
});

export default axiosInstanceAPI;
