<!--
 * @Author: your name
 * @Date: 2021-03-06 15:34:25
 * @LastEditTime: 2021-03-06 17:10:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\center\middle.vue
-->
<template>
  <div id="middle">
    <!-- <ul>
      <li><router-link to="1"> 
         <span><img src="../../assets/home/4@2x.png" alt=""></span>
         <span>歌手</span>
          </router-link>
          </li>
          <li><router-link to="2"> 
         <span><img src="../../assets/home/5@2x.png" alt=""></span>
         <span>专辑</span>
          </router-link>
          </li>
          <li><router-link to="3"> 
         <span><img src="../../assets/home/6@2x.png" alt=""></span>
         <span>排行</span>
          </router-link>
          </li>
          <li><router-link to="4"> 
         <span><img src="../../assets/home/7@2x.png" alt=""></span>
         <span>电台</span>
          </router-link>
          </li>
          <li><router-link to="5"> 
         <span><img src="../../assets/home/8@2x.png" alt=""></span>
         <span>歌单</span>
          </router-link>
          </li>
      
    </ul> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
    #middle{
        ul{
            display: flex;
            font-size: .2rem;
            li{
               width: 20%;
               border: 1px solid; 
             
               a{
                     display: flex;
               justify-content: center;
               align-items: center;
                flex-wrap: wrap;
                   img{
                       width: .5rem;
                       height: .5rem;
                   }
                   span{
                       color: #000;
                   }
               }
            }
        }
    }
</style>
