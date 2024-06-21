import axios from "axios"

/**
 * 对asios进行全局配置
 * 作用：
 * 1、配置自定义请求头
 * 2、设置请求带cookie
 * 3、请求头和响应拦截
 * ---3.1、添加loading动画
 * ---3.2、统一错误处理
 */

export const ajax = axios.create({
    headers: {
        source: 'h5',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    // 携带上一次的cookie
    withCredentials: true
})

// 请求钩子
ajax.interceptors.request.use(function (config) {
    console.log('请求钩子')
    return config
}, function (error){
    return Promise.reject(error)
})

// 响应钩子
ajax.interceptors.response.use(function (response) {
    console.log('响应钩子') 
    return response
}, function (error){
    //统一错误处理（200开头的响应是上面的函数处理
    if(error.response.status === 401 ){
        window.alert('未登录，即将跳转到登录页面')
    }
    //返回错误信息
    return Promise.reject(error)
})

