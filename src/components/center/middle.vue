<!--
 * @Author: your name
 * @Date: 2021-03-06 15:34:25
 * @LastEditTime: 2021-03-06 22:18:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\center\middle.vue
-->
<template>
  <div id="middle">
    <ul class="ul">
      <li><router-link to="/Singer"> 
         <span><img src="../../assets/home/4@2x.png" alt=""></span>
         <span>歌手</span>
          </router-link>
          </li>
          <li><router-link to="/Album"> 
         <span><img src="../../assets/home/5@2x.png" alt=""></span>
         <span>专辑</span>
          </router-link>
          </li>
          <li><router-link to="/Ranking"> 
         <span><img src="../../assets/home/6@2x.png" alt=""></span>
         <span>排行</span>
          </router-link>
          </li>
          <li><router-link to="/Anchor"> 
         <span><img src="../../assets/home/7@2x.png" alt=""></span>
         <span>电台</span>
          </router-link>
          </li>
          <li><router-link to="/Song"> 
         <span><img src="../../assets/home/8@2x.png" alt=""></span>
         <span>歌单</span>
          </router-link>
          </li>
      
    </ul>
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
      
      padding-top: .15rem;
      padding-bottom: .1rem;
      border-bottom: 1px solid #ccc;
        .ul{
            display: flex;
            font-size: .14rem;
            li{
               width: 20%;
               
               a{
                     display: flex;
               justify-content: center;
               align-items: center;
                flex-wrap: wrap;
                   img{
                       width: .5rem;
                       height: .5rem;
                       background: #dbf8fe;
                       opacity: .8;
                   }
                   span{
                       color: #000;
                   }
               }
            }
        }
    }
</style>
