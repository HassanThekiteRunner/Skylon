<!--
 * @Author: your name
 * @Date: 2021-03-07 15:21:54
 * @LastEditTime: 2021-03-07 19:29:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\goback\goback.vue
-->
<template>
    <div @click="goback">
        <img src="../goback/login-one.png" alt="">
        <span>帮助</span>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
        goback(){
            this.$router.go(-1)
        }
    },
    mounted(){

    },
    components: {

    },
};
</script>

<style scoped lang="less">
    div{
        height: .6rem;
        font-size: .18rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            width: .25rem;
            height: .25rem;
            margin-left: .1rem;
        }
        span{
            display: inline-block;
            margin-right: .2rem;
            color: #666;
        }
    }
</style>
