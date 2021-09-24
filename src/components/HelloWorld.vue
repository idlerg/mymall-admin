<template>
  <div class="login">
    <input type="text" v-model="userName" placeholder="请输入用户名">
    <input type="number" v-model="userPhone" placeholder="请输入手机号">
    <input type="password" v-model="password" placeholder="请输入密码">
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      userName: '',
      userPhone: '',
      password: ''
    }
  },
  methods: {
    submit(){
      let {userName,userPhone,password} = this.$data
      console.log(userName,userPhone,password);
      // http://192.168.31.130:3000/back/backRegister
      let params = {
        userName,
        userPhone,
        password
      }
      axios.post('http://192.168.31.130:3000/back/backRegister', params)
      .then(function (response) {
        if(response.data.code == 0){
          console.log('注册成功------');
        } else {
          console.log(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
