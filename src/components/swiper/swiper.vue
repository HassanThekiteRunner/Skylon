<!--
 * @Author: your name
 * @Date: 2021-03-06 14:46:08
 * @LastEditTime: 2021-03-08 19:32:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\swiper\swiper.vue
-->
<template>
  <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in banner" :key="index"
      ><img :src="item" alt=""
    /></swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {banner} from '../../http/self/self'
export default {
  name: "carrousel",
  data() {
    return {
      banner:'',
      banner1:'',
      banner2:'',
  
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          bulletClass : 'my-bullet',
          
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        loop: true,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    banner().then((res)=>{
     
      this.banner=res.data.imglist
      
    })
  },
};
</script>


<style  lang="less" >

.my-bullet{
  width: .12rem;
    height:.12rem;
    display: inline-block;
    border-radius: 50%;
    background: #000;
    opacity: 0.2;
    margin:0 .3rem;
    text-align: center;
    
}

.swiper-container {
  width: 100%;
  --swiper-theme-color: #ff6600;

  // --swiper-pagination-color: #00ff33;/* 两种都可以 */
}
.swiper {
  width: 100%;
  height: 100%;
  font-size: 0;
  overflow: hidden;
  
}
.swiper img {
  width: 100%;
  height: 100%;
}
</style>