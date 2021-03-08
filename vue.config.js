/*
 * @Author: your name
 * @Date: 2021-03-06 09:37:51
 * @LastEditTime: 2021-03-08 14:03:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\config.js
 */
module.exports = {
    //...
    devServer: {
      proxy: {
        '/api': {
          target: 'http://192.168.1.53:3000',
          changeOrigin:true,
          pathRewrite: { '^/api': '' },
        },
      },
    },
  };