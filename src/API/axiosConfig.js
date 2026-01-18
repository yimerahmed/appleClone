import axios from "axios";

const instance = axios.create({
  baseURL: "https://yimeriphone.yimertech.com",
});

export default instance;
