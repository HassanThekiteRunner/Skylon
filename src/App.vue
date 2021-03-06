<!--
 * @Author: your name
 * @Date: 2021-03-06 09:09:36
 * @LastEditTime: 2021-03-06 14:10:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\App.vue
-->
<template>
    <div>


<router-view></router-view>
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

    },
    components: {
      
    },
};

    function obj(){
        let uiw=375,
            winw=document.documentElement.clientWidth||document.body.clientWidth,
            rete=winw/uiw;
            document.documentElement.style.fontSize=rete*100+'px';

    }
    obj()
    window.onresize=obj;
</script>

<style  lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
</style>
