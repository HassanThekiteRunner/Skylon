<!--
 * @Author: your name
 * @Date: 2021-03-06 11:52:46
 * @LastEditTime: 2021-03-13 08:38:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\head\music.vue
-->
<template>
  <div>
    <Head></Head>
    <Swiper></Swiper>
    <Middle></Middle>

    <Hot></Hot>

    <router-view></router-view>

    <div id="foot">
      <img class="img" src="../../assets/home/50@2x.png" alt="" />
      <div>
        <p>Where IS Your Love</p>
        <p>横滑可以切换上下首哦</p>
      </div>
      <img
        @click="bf"
        v-show="bofang"
        class="img1"
        src="../../assets/home/home-5.png"
        alt=""
      />
      <img
        @click="zt"
        class="img3"
        v-show="zanting"
        src="../../assets/home/home-4.png"
        alt=""
      />
      <img class="img2" src="../../assets/home/home-6.png" alt="" />
    </div>
    <audio id="music" src="../../assets/home/music.mp3"></audio>
  </div>
</template>

<script>

import Hot from '../hot/hot'
import Middle from '../center/middle.vue';
import Swiper from '../swiper/swiper.vue';
import Head from "./head";
export default {
  props: {},
  data() {
    return {
      zanting:false,
      bofang:true,
     
    };
  },
  methods: {
    // bf(){
    //  let music=document.getElementById('music')
    //  if(music!==null){

    //     // alert('请点击左上角前往注册')
    //    this.$router.push('/Register')
    //  }else{
    //  music.play()
    //   this.bofang=false
    //   this.zanting=true
    //  }
     
    // },

    bf(){
      let music=document.getElementById('music')
       music.play()
      this.bofang=false
      this.zanting=true
    },
    zt(){
     let music=document.getElementById('music')
     music.pause()
      this.bofang=true
      this.zanting=false
    }
  },
  mounted(){
    
  },
  components: {
    Head,
    Swiper,
    Middle,
    Hot,
  },
};
    
</script>

<style scoped lang="less">
#foot {
  position: relative;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  height: 0.5rem;
  width: 100%;

  background: linear-gradient(to right, #3187e3, #883edf, #e632a9);
  .img {
    width: 0.35rem;
    height: 0.35rem;
    float: left;
    margin: 0.06rem 0.15rem;
  }
  div {
    float: left;
    font-size: 0.1rem;
    color: #fff;
    p {
      margin-top: 0.06rem;
    }
  }
  .img1 {
    width: 0.28rem;
    height: 0.28rem;
    float: left;
    margin: 0.1rem 0 0 1rem;
  }
  .img2 {
    width: 0.28rem;
    height: 0.28rem;
    // float: left;
    margin: 0.1rem 0 0 0.2rem;
    position: absolute;
    top: 0;
    left: 3.15rem;
  }
  .img3 {
    position: absolute;
    top: 0.1rem;
    left: 2.85rem;
    width: 0.28rem;
    height: 0.28rem;
  }
}
</style>
