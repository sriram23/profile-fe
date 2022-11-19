import axios from "axios";

const callApi = axios.create({
    baseURL: 'https://sriram-23.herokuapp.com',
  });

export default callApi