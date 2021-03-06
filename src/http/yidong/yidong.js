/*
 * @Author: your name
 * @Date: 2021-03-06 10:20:50
 * @LastEditTime: 2021-03-06 10:44:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\http\yidong\yidong.js
 */
let shiying={
    fun(){
        let uiw=320;
        let winw=document.documentElement.clientWidth||document.body.clientWidth;
        let rate=winw/uiw;
        document.documentElement.style.fontSize=rate*100+'px'
    
    },
   
}
export{
    shiying
}
 