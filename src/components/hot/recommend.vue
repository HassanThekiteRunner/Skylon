<!--
 * @Author: your name
 * @Date: 2021-03-06 19:21:55
 * @LastEditTime: 2021-03-08 15:08:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\hot\recommend.vue
-->
<template>
    <div class="tuijian">
      <ul>
          <li v-for="(item,index) in fine" :key="index">
              <img :src="item.imgurl" alt="">
              <p>{{item.info}}</p>
              <p>{{item.title}}</p>
          </li>
      </ul>
    </div>
</template>

<script>
import {obj1} from '../../http/self/self'
export default {
    props: {

    },
    data() {
        return {
            fine:[]
        };
    },
    methods: {

    },
    mounted(){
        obj1().then((res)=>{
            
            this.fine=res.data.musicList
        })
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .tuijian{
       
        ul{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            margin-bottom: 1rem;
            li{
                width: 31%;
                height: 1.7rem;
                display: flex;
                flex-direction: column;
                border-radius: .9rem;
                img{
                    width: 100%;
                    height: 1.2rem;
                }
                p{
                    font-size: .12rem;
                }
            }
        }
    }
</style>
