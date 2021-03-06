<!--
 * @Author: your name
 * @Date: 2021-03-06 11:52:46
 * @LastEditTime: 2021-03-06 15:42:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\head\music.vue
-->
<template>
  <div>
    <Head></Head>
   <Swiper></Swiper>
   <Middle></Middle>
  </div>
</template>

<script>
import Middle from '../center/middle.vue';
import Swiper from '../swiper/swiper.vue';
import Head from "./head";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    Head,
    Swiper,
    Middle,
  },
};
    Middle
</script>

<style scoped lang="less">
</style>
