import axios from 'axios'
import { baseUrl, TIMEOUT } from './config'

const request = axios.create({
    baseURL:baseUrl,
    timeout: TIMEOUT
})

//请求拦截
request.interceptors.request.use(config => {
    //发送网络请求之前，先执行此处代码
    //1.在界面中间显示loading组件
    //2.某些请求需要加上用户token信息，没有token则表示未登录，跳转到登录页面
    //3.发送的数据需要先进行数据序列化处理过程
    console.log('请求被拦截')
    return config
}, err => {
    console.log('请求拦截失败')
})

//响应拦截
request.interceptors.response.use(res => {
    //处理返回的数据
    console.log(res)
    return res.data
}, err => {
    //返回数据错误的时候的response
    if(err && err.response) {
        switch(err.response.status){
            case 400:
                console.log('请求出错～～～')
            case 401:
                console.log('访问未授权～～～')
            case 404:
                console.log('页面不存在～～～')
            default:
                console.log('其他错误信息')
        }
    }
})

export default request
