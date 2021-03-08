/*
 * @Author: your name
 * @Date: 2021-03-06 09:21:17
 * @LastEditTime: 2021-03-08 18:54:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\http\self.js
 */
import http from '../index'

export function obj(){
    return http({
        method:'get',
       params:{
           type:'new'
       },
        url:'/home'
    })
    
}

export function obj1(){
    return http({
        method:'get',
        params:{
            type:'recommend'
        },
        url:'/home'
    })
    
}
export function banner(){
    return http({
        method:'get',
        params:{
            type:'banner'
        },
        url:'/home'
    })
    
}
export function register(){
    return http({
        method:'post',
        data:{
            type:'register',
            // phone:phone,
            // pass:pwd
        },
        url:'/users'
    })
    
}

export function login(){
    return http({
        // method:'post',
        // data:{
        //     type:'login',
        //     phone:phone,
        //     pass:pass
        // },
        // url:'/users'
    })
    
}
