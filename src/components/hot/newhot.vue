<!--
 * @Author: your name
 * @Date: 2021-03-06 19:09:00
 * @LastEditTime: 2021-03-08 17:21:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\hot\newhot.vue
-->
<template>
    <div class="zuixin">
       <ul class="uls">
           <li v-for="(item,index) in list" :key="index">
               <img :src="item.imgurl" alt="">
               <p>{{item.info}}</p>
               <p>{{item.title}}</p>
           </li>
       </ul>
        
    </div>
</template>

<script>
import { obj } from "../../http/self/self";
export default {
    props: {

    },
    data() {
        return {
            list:[]
        };
    },
    methods: {

    },
      mounted() {
    obj().then((res) => {
       
      this.list=res.data.musicList
      
    });
  },
    components: {

    },
};
</script>

<style scoped lang="less">
    .zuixin{
        width: 100%;
        font-size: .12rem;
        .uls{
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 1rem;
            li{
            
                
                width: 31%;
                img{
                    width: 100%;
                    height: 1.2rem;
                }
            }
        }
    }
</style>
