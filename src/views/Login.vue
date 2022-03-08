<template>
  <div class="config">
    <form class="shadown">
      <div class="row">
        
        <div class="col-form col-half">
          <div class="auth-img"></div>
        </div>
        <div class="col-form col-half">
          <img
            :src="require('@/assets/img/logo.png')"
            alt=""
            class="img-logo"
          />
          <div class="login">
            <form action="" class="form-auth" @submit.prevent="onSubmit">
              <label for="username" class="label-form">Username</label>
              <input
                class="form-input"
                v-model="username"
                type="text"
                id="username"
                placeholder="Type your username ..."
              />
              <div class="thick"></div>
              <label for="password" class="label-form">Password</label>
              <input
                class="form-input"
                v-model="password"
                type="password"
                id="password"
                placeholder="Type your password ..."
              />
              <div class="thick"></div>
              <br />
              <p v-if="error">{{error}}</p>
              <button class="btn-submit" type="submit">Login</button>
              <button class="btn-google">
                <i class="ti-google"></i> SignIn with Goolgle
              </button>
            </form>
          </div>
          <p class="question">
            Need a Shoes account?
            <router-link :to="{ name: 'register-router', param: {} }"
              >Create an account</router-link
            >
          </p>
        </div>
        <div class="clear"></div>
      </div>
    </form>
    <div class="clear"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuth } from "@/composables/user/useAuth";
import { useRouter } from "vue-router";
import socket from "@/config/socket";
export default {
  name: "Login",
  setup() {
    const router=useRouter();
    const username = ref("");
    const password = ref("");
    const isLog=ref(false);
    const users=ref([]);
    const { error, isPending, signIn } = useAuth();
    async function onSubmit() {
      await signIn(username.value,password.value)
      // console.log(VueCookieNext.getCookie('Authentication'))
      socket.connect();
      socket.auth={
        token:localStorage.getItem('at-token')
      }
      socket.emit("users");
      isLog.value=true;
      router.push({name:"productdetail-router",params:{}})
    }
    return {
      error,isPending,signIn,
      username,
      password,
      onSubmit,
      users
    };
  },
};
</script>

<style>

.config {
  background-color: pink;
}
.login {
  border-radius: 5px;
}
.shadown {
  margin-top: 20px;
  max-width: 900px;
  max-height: 1500px;
  margin: auto;
  background-color:#fff ;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.img-logo {
  margin-top: 60px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.form-auth {
  border: 1px solid #ccc;
  padding: 12px 16px;
  background-color: #fff;
  border: none;
}
.label-form {
  font-size: 18px;
  display: block;
  margin-top: 38px;
  color: blue;
}
.form-input {
  border: 0px solid;
  height: 30px;
  outline: none;
  font-size: 16px;
  /* padding: 18px 0; */
  width: 100%;
  margin-top: 10px;
}
.btn-submit {
  background-color: blue;
  border-radius: 4px;
  color: #fff;
  width: 100%;
  padding: 12px 16px;
  margin-top: 16px;
}
.btn-submit:hover,
.btn-google:hover {
  cursor: pointer;
}
.auth-img {
  height: 752px;
  max-width: 100%;
  padding-top: 50%;
  background: url("~@/assets/img/auth-img.png") top center / cover no-repeat;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.new-auth-img{
    width: 752px;
    height: 100%;
}
.col-form {
  float: left;
}
.question {
  padding: 20px;
  font-size: 16px;
  text-align: right;
}
.btn-google {
  background-color: red;
  border-radius: 4px;
  color: #fff;
  width: 100%;
  padding: 12px 16px;
  margin-top: 16px;
}
</style>