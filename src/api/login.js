import service from '@/utils/request';

/** 
 * 获取验证码
 */
export function GetSms(data){
    return service.request({
        method: "post",
        url: "/getSms/",
        data
        //data: data, 左右一样的化可以写成一个
    })
}

/**
 * 获取用户角色
 */
export function getUserRole(data = {}){
    return service.request({
        method: "post",
        url: "/userRole/",
        data
        //data: data, 左右一样的化可以写成一个
    })
}
/**
 * 登录
 */
export function Login(data){
    return service.request({
        method: "post",
        url: "/login/",
        data
        //data: data, 左右一样的化可以写成一个
    })
 }
/**
 * 注册
 */
 export function Register(data ){
    return service.request({
        method: "post",
        url: "/register/",
        data
        //data: data, 左右一样的化可以写成一个
    })
 }