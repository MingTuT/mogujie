import axios from "axios";


// 本接口为测试接口,真实接口请联系coderwhy001
const url = "http://152.136.185.210:7878/api/m5";

let config = {
  baseURL: url,
  timeout: 10000
};

const _axios = axios.create(config);

// 请求拦截
_axios.interceptors.request.use(
  req => {

    return req
  }
);

// 响应拦截
_axios.interceptors.response.use(
  res => {
    return res.data
  }
);

// 全局注册axios
window.axios = _axios
