/*
 * 基于axios封装的请求模块
 * */

import axios from 'axios'
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 通过插件机制，获取到上下文对象（query,params,req,res,app,store...)
// 插件导出函数必须作为 default 成员
export default ({
  store
}) => {
  // 添加请求拦截器,任何请求都要经过，做一些公共的业务处理
  // 例如统一设置 Token
  request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    const {
      user
    } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么,此时请求还没有发出去
    return Promise.reject(error);
  });

  // 添加响应拦截器
  request.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
}