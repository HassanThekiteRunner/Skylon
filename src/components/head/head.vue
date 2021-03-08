<!--
 * @Author: your name
 * @Date: 2021-03-06 09:20:27
 * @LastEditTime: 2021-03-07 14:34:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\head\head.vue
-->
<template>
  <div id="head">
    

    <ul>
      <li><img class="img1" src="../../assets/home/1.png" alt="" /></li>
      <li><router-link to="/Mine">我的</router-link></li>
      <li><router-link to="/Music">音乐馆</router-link></li>
      <li><router-link to="/Find">发现</router-link></li>
      <li><img class="img2" src="../../assets/home/3@2x.png" alt="" /></li>
    </ul>
    
  
  </div>
</template>

<script>
import { obj } from "../../http/self/self";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // obj().then((res) => {
    //   console.log(res.data);
    // });
  },
  components: {},
};
</script>

<style scoped lang="less">
#head {
  background: linear-gradient(to right, #3187e3, #883edf, #e632a9);
  height: 0.6rem;
  width: 100%;
 
  .img1 {
    width: 0.2rem;
    height: 0.2rem;
    margin-left: 0.15rem;
    
  }
  ul {
    font-size: .18rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    li {
      a{
        color: #fff;
      }
      .router-link-active {
        color: rgb(236, 50, 165);
        border-bottom: 5px solid ;
      }
    }
  }
  .img2 {
    width: 0.26rem;
    height: 0.26rem;
  }
}
</style>