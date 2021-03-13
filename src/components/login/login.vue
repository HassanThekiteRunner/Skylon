<!--
 * @Author: your name
 * @Date: 2021-03-07 19:20:00
 * @LastEditTime: 2021-03-09 17:29:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\login\login.vue
-->
<template>
  <div id="zc">
    <Goback></Goback>
    <div>
      <img src="../../assets/register/logo.png" alt="" />
      <div>
        <ul id="uls">
          <li>
            <input  v-model="zh" type="text" placeholder="请输入账号" name="" id="" />
          </li>
          <li>
            <input
              class="input"
              v-model="pwd"
              type="text"
              placeholder="请输入密码"
              name=""
              id=""
            />
          </li>
          <li id="li"><input class="span" v-model="dl" type="text"></li>
          <li>
            <img class="img" src="../../assets/login/login-two.png" alt="" />
          </li>
        </ul>
        <img class="dl" @click="login" src="../../assets/login/login-three.png" alt="" />
        <ul id="ul">
          <li>忘记密码</li>
          <li>|</li>
          <li>用户注册</li>
        </ul>
        <p>登录即代表阅读并同意服务协议</p>
        <div id="image">
          <img src="../../assets/login/login-microblog.png" alt="" />
          <img src="../../assets/login/login-qq.png" alt="" />
          <img src="../../assets/login/login-WeChat.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Goback from "../goback/goback";
export default {
  props: {},
  data() {
    return {
      zh:'',
      pwd:'',
      dl:''
      
    };
  },
  methods: {
    login(){
      if(this.zh==''){
        this.zh='账号不能为空'
       
        return
      }else if(this.zh.search(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/ )==-1){
        this.zh='账号输入不正确'
        
        return
      }else if(this.pwd==''){
        this.pwd='密码不能为空'
      }else if(this.pwd.search(/^(\w){6,20}$/)==-1){
        this.pwd='密码输入不正确'
      }

        this.axios({
          method:'post',
            url:'/users',
          params:{
            type:'login',
            phone:this.zh,
            pass:this.pwd
          }

        }).then((res)=>{
          if(res.data.ok==true){
            this.dl='登录成功';
          setTimeout(()=>{
          this.$router.push('/Music')
          },2000)
          
          }else{
            this.dl='手机号不存在';
          }
        })
        
      
    }

  },
  components: {
    Goback,
  },
};
</script>

<style scoped lang="less">
#zc {
  div {
    width: 100%;
    text-align: center;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    div {
      position: relative;
      width: 80%;
      height: 2rem;
      margin: 0 auto;
      #uls {
        :nth-child(2){
          border-bottom: 1px solid #ccc;
        }
        :nth-child(1){
          border-bottom: .5px solid #ccc;
        }
        li {
         
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          input {
            height: 0.7rem;
            font-size: 0.16rem;
            border: none;
            width: 100%;
            padding-left: .8rem;
            padding-right: .8rem;
            text-align: center;
            padding-top: 0.3rem;
            box-sizing: border-box;
            outline: none;
          }
        }
        #li{
          border-bottom: none;
          input{
            border-bottom: none;
          }
        }
        #li{
          height: .4rem;
          border-bottom: none;
          
          .span{
               height: .4rem;
           padding: 0;
           padding-left: .8rem;
              padding-right: .8rem;
        font-size: 0.15rem;
        color: red;
        border-bottom: none;

          }
        }
      }
      #ul {
        margin-top: 0.5rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          font-size: 0.14rem;
          margin: 0 0.2rem;
          color: #ccc;
        }
      }

      img {
        width: 0.6rem;
        height: 0.6rem;
        
        
      }
      p {
        font-size: 0.12rem;
        color: #ccc;
        margin-top: 0.1rem;
      }
    #image{
        width: 100%;
        img{
            margin: 0 .2rem;
        }
    }

      .img {
        position: absolute;
        top: 0.4rem;
        right: 0;
        
        width: 0.26rem;
        height: 0.24rem;
      }
    }
  }
}
</style>
