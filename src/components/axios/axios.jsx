import axios from "axios";

const callApi = axios.create({
    baseURL: 'https://sriram-23.vercel.app',
  });

export default callApi