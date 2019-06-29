import axios from 'axios'
import Vue from 'vue'
/**
 * 获取一个新的自定义的axios实例
 */

export let ajax = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30000,
  withCredentials: true
})
let s = new Vue()
ajaxUser.interceptors.response.use(function(response) {
  return response
}, function(error) {
  // Vue.$vux.loading.hide()
  s.$Modal.error({
    content: '网络请求失败！请检查您的网络设置！'
  })
  return Promise.reject(error)
})
ajax.interceptors.response.use(function(response) {
  return response
}, function(error) {
  // Vue.$vux.loading.hide()
  s.$Modal.error({
    content: '网络请求失败！请检查您的网络设置！'
  })
  return Promise.reject(error)
})
