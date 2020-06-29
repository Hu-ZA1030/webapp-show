import axios from "axios"

let baseURL_dev = "", //开发环境
// let baseURL_pro = "", // 生产环境 ,企业的域名
// let baseURL_test = "" // 测试环境,内网地址


// 创建 axios 实例
const fetch = axios.create({
    baseURL:baseURL_dev,
    timeout: 7000, // 超时设置,请求到响应回来超过7秒就失败
    headers:  {"Content-Type":" application; charset=utf-8"}
  });

 
// 封装请求拦截器
fetch.interceptors.request.use( (config)=> {
    // 这里的代码是做一些检测和包装处理
    console.log("请求拦截：暂停",config)
    // 鉴权 token
    config.headers.Authorization = localStorage.getItem("token") || ""
    return config;
  })

//   封装响应拦截器
fetch.interceptors.response.use((response)=> {
   // 请求成功
   console.log("响应拦截：暂停",response)
        //数据过滤，根据后端的标识字段来进行过滤数据
        if(response.data && response.data.success){
            return response.data.data;
        }else{
            console.log("网络异常，请稍后再试")
        }
    
  }, (error)=> {
    // 请求失败
    return Promise.reject(error);
  });

export default fetch