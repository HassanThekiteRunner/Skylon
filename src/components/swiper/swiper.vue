<!--
 * @Author: your name
 * @Date: 2021-03-06 14:46:08
 * @LastEditTime: 2021-03-06 17:14:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\swiper\swiper.vue
-->
<template>
  <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
    <swiper-slide
      ><img src="../../assets/home/home-1.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="../../assets/home/home-2.jpg" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="../../assets/home/home-3.jpg" alt=""
    /></swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // autoplay: {
        //   delay: 1000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true,
        // },
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
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
};
</script>


<style lang="less" >
.swiper-container {
    width:100% ;
  --swiper-theme-color: #ff6600;

  // --swiper-pagination-color: #00ff33;/* 两种都可以 */
}

.swiper {
  width: 100%;
  // font-size: 0;
  // .swiper-pagination-bullets {
  //   height: 0.4rem;
  //   // line-height: 0.2rem;
  //   width: 100%;
  // }
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin:0 2rem;
   width: 0.13rem;
      height: 0.13rem;
}

.swiper img {
  width: 100%;
  height: 100%;
}
</style>