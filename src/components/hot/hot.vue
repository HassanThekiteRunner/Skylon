<!--
 * @Author: your name
 * @Date: 2021-03-06 19:09:56
 * @LastEditTime: 2021-03-07 15:12:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\hot\hot.vue
-->
<template>
  <div id="hot">

    
    <span class="span">精选歌单</span>
    <span class="span1"
      ><router-link to="/Music/Newhot">最新</router-link></span
    >
    <span class="span2"
      ><router-link to="/Music/Recommend">推荐</router-link></span
    >
 
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted(){
    
  },
  components: {},
};
</script>

<style scoped lang="less">
#hot {

  span{
     .router-link-active{
      color: red;
    }
  }
  font-size: 0;
  margin-top: .2rem;
  .span {
    display: inline-block;
    width: 1rem;
    height: 0.3rem;
   
    font-size: 0.22rem;
    padding-left: .2rem;
    
  }
  .span1 {
    display: inline-block;
    width: .35rem;
    height: 0.3rem;
 
    font-size: 0.16rem;
    margin-left: 1.2rem;
  }
  .span2 {
    display: inline-block;
    width: .35rem;
    height: 0.3rem;
  
    font-size: 0.16rem;
    margin-left: .3rem;
  }
}
</style>
