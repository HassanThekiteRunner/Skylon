<!--
 * @Author: your name
 * @Date: 2021-03-06 09:09:36
 * @LastEditTime: 2021-03-06 21:38:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\App.vue
-->
<template>
    <div id="app">


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

//     (function () {
//     var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
//     var timeoutId;
//     function setRem() {
//         var clientWidth = document.documentElement.clientWidth;
//         var nowPX = clientWidth / 375 * 100;
//         document.documentElement.style.fontSize = nowPX + 'px';
//     }
//     setRem();
//     window.addEventListener(supportsOrientationChange, function () {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(function () {
//             setRem();
//         }, 300);
//     }, false);
// })();
</script>

<style  lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    #app{
        width: 100%;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
</style>
