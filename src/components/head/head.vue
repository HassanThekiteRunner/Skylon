<!--
 * @Author: your name
 * @Date: 2021-03-06 09:20:27
 * @LastEditTime: 2021-03-06 17:09:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\head\head.vue
-->
<template>
  <div>
    <img class="img1" src="../../assets/home/1.png" alt="" />

    <ul>
      <li><router-link to="/Mine">我的</router-link></li>
      <li><router-link to="/Music">音乐馆</router-link></li>
      <li><router-link to="/Find">发现</router-link></li>
    </ul>
    <img class="img2" src="../../assets/home/3@2x.png" alt="" />
    <router-view></router-view>
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
div {
  background: linear-gradient(to right, #3187e3, #883edf, #e632a9);
  height: 0.6rem;

  justify-content: space-between;
  .img1 {
    width: 0.3rem;
    height: 0.3rem;
    float: left;
    margin-top: 0.16rem;
    margin-left: 0.1rem;
  }
  ul {
    float: left;
    font-size: 0.22rem;
    width: 2.75rem;
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
    width: 0.3rem;
    height: 0.3rem;
    float: left;
    margin-top: 0.16rem;
  }
}
</style>