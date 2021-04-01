import axios from 'axios';
import { Message } from "element-ui";
// import {getToken, getUserName } from "@/utils" 

const BASEURL = process.env.NOOE_ENV === "production" ? "" : "/devApi";
// 创建axios，赋给变量service
const service = axios.create({
    baseURL: BASEURL,
    timeout: 15000 // 超时的时间
}); 

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 后台需要前端那边传递什么样的参数（在请求头处添加）
    // token
    // userid
    // sui
　  // 业务的需求
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
}); 

// 添加响应拦截器 
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data = response.data
    if(data.resCode !== 0){
        Message.error(data.message)
        return Promise.reject(data)
    }else{
        return response
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});



export default service;