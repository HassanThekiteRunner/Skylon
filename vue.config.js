/*
 * @Author: your name
 * @Date: 2021-03-06 09:37:51
 * @LastEditTime: 2021-03-08 21:43:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\config.js
 */
module.exports = {
    //...
    devServer: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:3000',
          changeOrigin:true,
          ws:true,
          pathRewrite: { '^/api': '' },
        },
      },
    },
  };