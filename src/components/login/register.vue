<!--
 * @Author: your name
 * @Date: 2021-03-07 19:23:05
 * @LastEditTime: 2021-03-09 16:46:53
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
            <input
              v-model="phone"
              type="text"
              placeholder="请输入手机号"
              name=""
              id=""
            />
           
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
            <input
              v-model="pwd"
              type="text"
              placeholder="请输入密码"
              name=""
              id=""
            />
          </li>
          <li id="li">
            <input v-model="ts" class="span"/>
          </li>
        </ul>
        
        <img @click="tiao" src="../../assets/login/login-three.png" alt="" />
        <p>注册即代表同意「迷音」服务条款和隐私条款</p>
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
      phone: "",
      yzm: "",
      pwd: "",
      ts: "",
    };
  },
  methods: {
    tiao() {
      if (this.phone == "") {
        this.phone = "手机号码不能为空";
        return;
        //11位手机号码正则验证
      } else if (
        this.phone.search(
          /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        ) == -1
      ) {
        this.phone = "手机号码格式不正确";
        return;
      } else if (this.yzm == "") {
        this.yzm = "验证码不能为空";
        return;
        // 5~16位以字母开头的，字母数字下划线组成的
      } else if (this.yzm.search(/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/) == -1) {
        this.yzm = "验证码格式不正确";
        return;
      } else if (this.pwd == "") {
        this.pwd = "密码不能为空";
        return;
        //校验密码：只能输入6-20个字母、数字、下划线
      } else if (this.pwd.search(/^(\w){6,20}$/) == -1) {
        this.pwd = "密码格式不正确";
        
        return;
      }
      this.axios({
        method:'post',
        url:'/users',
        params:{
          type:'register',
          phone:this.phone,
          pass:this.pwd
        }
      }).then((res)=>{
        if(res.data.ok==true){
          this.ts='注册成功';
        //  let _this=this
        //  setTimeout(function(){
        //      _this.$router.push('/Login')
        //  },2000) 
        setTimeout(()=>{
           this.$router.push('/Login')
        },2000)
          
        }else{
            this.ts='该手机号已经被注册';
        }   
      })
    },
  },
  mounted() {},
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
          input {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 0.7rem;
            font-size: 0.15rem;
            border: none;
            width: 100%;
            padding-left: .8rem;
              padding-right: .8rem;
            padding-top: 0.3rem;
            box-sizing: border-box;
            outline: none;
            text-align: center;
          }
          input::-webkit-input-placeholder{
             
              text-align: center;
              line-height: .7rem;
              
          } 
        }
        #li{
          border-bottom:none;
          height: .4rem;
         
         .span {
           height: .4rem;
           padding: 0;
           padding-left: .8rem;
              padding-right: .8rem;
        font-size: 0.15rem;
        color: red;
        border: none;
      }
        }
      }
      img {
        width: 0.6rem;
        height: 0.6rem;
      }
      p {
        font-size: 0.12rem;
        color: #ccc;
        margin-top: 0.6rem;
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
