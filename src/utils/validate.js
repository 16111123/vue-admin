/**
 * 
 * 过滤特殊字符
 */
export function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*%（）;—|{ }【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < s.length; i++) {
            rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
  /**
 * 
 * 验证邮箱
 */
export function stripUsename(s) {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
   if(!reg.test(s)){
       return false
   }else{
       return true
   }
} 
/**
 * 
 * 验证密码
 */
export function stripPassword(s) {
       let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
       if(!reg.test(s)){
           return false
       }else{
           return true
       }
    } 
/**
 * 
 * 验证验证码
 */
 export function stripCode(s) {
       var reg = /^[a-z0-9]{6}$/
       if(!reg.test(s)){
           return false
       }else{
           return true
       }
} 