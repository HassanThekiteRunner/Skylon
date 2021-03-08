<!--
 * @Author: your name
 * @Date: 2021-03-07 19:23:05
 * @LastEditTime: 2021-03-08 18:56:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\components\login\register.vue
-->
<template>
  <div id="zc">
    <Goback></Goback>
    <div>
      <img src="../../assets/register/logo.png" alt="" />
      <div>
        <ul>
          <li>
            <input v-model="phone"  type="text" placeholder="请输入手机号" name="" id=""
             />
             <!-- <van-icon name="cross" size='10px'  /> -->
          </li>
          <li>
            <input
            
              class="input"
              v-model="yzm"
              type="text"
              placeholder="请输入验证码"
              name=""
              id=""
            />
          </li>
          <li>
            <img
              class="img"
              src="../../assets/register/register-two.png"
              alt=""
            />
          </li>
          <li>
            <input v-model="pwd" type="text" placeholder="请输入密码" name="" id="" />
          </li>
        </ul>
        <img @click="tiao" src="../../assets/login/login-three.png" alt="">
        <p>注册即代表同意「迷音」服务条款和隐私条款</p>
      </div>
    </div>
  </div>
</template>

<script>
import {register} from '../../http/self/self'
import Goback from "../goback/goback";
export default {
  props: {},
  data() {
    return {
        phone:'',
        yzm:'',
        pwd:'',
    };
  },
  methods: {
      tiao(){
       
        if(this.phone==''){
        this.phone='手机号码不能为空'
        return
        //11位手机号码正则验证
        }else if(this.phone.search(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/)==-1){
          this.phone='手机号码格式不正确'
          return
        }else if(this.yzm==''){
            this.yzm='验证码不能为空'
            return
        // 5~16位以字母开头的，字母数字下划线组成的
        }else if(this.yzm.search(/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/)==-1){
            this.yzm='验证码格式不正确'
            return
        }else if(this.pwd==''){
            this.pwd='密码不能为空'
            return
        //校验密码：只能输入6-20个字母、数字、下划线 
        }else if(this.pwd.search(/^(\w){6,20}$/)==-1){
            this.pwd='密码格式不正确'
            return
        }
           
        // this.$store.state.phone=this.phone   
        // this.$store.state.pwd=this.pwd   
           // this.$router.push('/Login')
      register({
        // method:'post',
        // url:'/users',
       
      data:{
        // type:'register',
        phone:this.$store.state.phone,
        pass:this.$store.state.pwd
      },
     
    }).then((res)=>{
      console.log(res)
      
    })
        
      }
      
  },
  mounted(){
    
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
      ul {
        li {
            border-bottom: 1px solid #ccc;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        //   position: relative;

        //   .van-icon{
        //         position: absolute;
        //         top: .45rem;
        //         right: 0;
        //   }
          input {
            height: 0.7rem;
           font-size: .16rem;
            border: none;
            width: 100%;
            padding-left: 1.1rem;
           
            padding-top: 0.3rem;
            box-sizing: border-box;
            outline: none;
            
          }
        }
      }
      img{
          width: .6rem;
          height: .6rem;
      }
        p{
            font-size: .12rem;
            color: #ccc;
            margin-top: .6rem;
        }
      .img {
        position: absolute;
        top: 1.15rem;
        right: 0;
        width: 0.7rem;
        height: 0.13rem;
      }
    }
  }
}
</style>
