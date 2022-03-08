<template>
  <div class="config2">
    <form class="shadown">
      <div class="row">
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
              <label for="email" class="label-form">Email</label>
              <input
                class="form-input"
                v-model="email"
                type="email"
                id="email"
                placeholder="Type your Email ..."
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
              <label for="confirmpassword" class="label-form">Confirm Password</label>
              <input
                class="form-input"
                v-model="confirmpassword"
                type="password"
                id="confirmpassword"
                placeholder="Type your confirm password ..."
              />
              <div class="thick"></div>
               <br />
              <p v-if="error">{{error}}</p>
              <button v-if="!isPending" class="btn-submit" type="submit">SignUp</button>
              <button v-else class="btn-submit">Loading ...</button>
            </form>
          </div>
          <p class="question">
            I have already member !
            <router-link :to="{ name: 'login-router', param: {} }"
              >SiginIn</router-link
            >
          </p>
        </div>
        <div class="col-form col-half">
          <div class="auth-img"></div>
        </div>
        <div class="clear"></div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuth } from "@/composables/user/useAuth";
export default {
  name: "Login",
  setup() {
    const username = ref("");
    const password = ref("");
    const email = ref("");
    const confirmpassword = ref("");
    const { error, isPending, signUp } = useAuth();
    async function onSubmit() {
      console.log(username.value,password.value,confirmpassword.value,email.value)
      await signUp(username.value,password.value,confirmpassword.value,email.value);
    }
    return {
      error,isPending,confirmpassword,email,
      username,
      password,
      onSubmit,
    };
  },
};
</script>

<style>
.thick {
  background-color: red;
  height: 4px;
  margin-top: 1px;
}
.config2 {
  background-color: #fff;
}
.login {
  border-radius: 5px;
}
.shadown {
  margin-top: 20px;
  max-width: 900px;
  max-height: 752px;
  margin: auto;
  background-color: #fff;
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
  width: 100%;
  max-width: 100%;
  padding-top: 50%;
  background: url("~@/assets/img/auth-img.png") top center / cover no-repeat;
  display: block;
  margin-left: auto;
  margin-right: auto;
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