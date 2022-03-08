<template>
  <div class="warpper">
    <div id="header">
      <ul id="nav">
        <!-- <img :src="require('@/assets/img/logo.png')" alt="Shoes" /> -->
        <li>
          <router-link :to="{ name: 'home-layout', params: {} }"
            >Home</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'home-layout', params: {} }">About</router-link>
        </li>
        <li>
          <a href="">Catergory</a>
          <ul class="subnav">
            <li>
               <router-link :to="{ name: 'home-layout', params: {} }">Vans</router-link>
            </li>

            <li>
               <router-link :to="{ name: 'home-layout', params: {} }">Convert</router-link>
            </li>

            <li>
               <router-link :to="{ name: 'home-layout', params: {} }">Adidas</router-link>
            </li>

          </ul>
        </li>
      </ul>
      <ul class="sign">
        <li><router-link :to="{ name: 'cart-router', params: {} }">CART</router-link></li>
        <li><router-link :to="{ name: 'login-router', params: {} }">SIGNIN</router-link></li>
        <li><router-link :to="{ name: 'register-router', params: {} }">SIGNUP</router-link></li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  setup(){
    const isShow=false;
    return{
      isShow
    }
  }
};
</script>

<style scoped>
.sign{
  float: right;
  list-style-type: none;
}
.sign li {
  display: inline-block;
}
.sign li:hover a{
  background-color: #fff;
  color: blue;
}
.sign li a{
  line-height: 46px;
  text-decoration: none;
  float: left;
  padding: 0 24px;
  color: #fff;
}
#nav{
    display: inline-block;
}
#header{
    height: 46px;
    background-color: #ccc;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
#nav li{
    list-style-type: none;
    display: inline-block;
    position: relative;
}
#nav> li> a {
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  line-height: 46px;
  display: block;
  padding: 0 24px 0 24px;
}
#nav >li:hover >a,
#nav .subnav li:hover{
    color: #000;
    cursor: pointer;
    background-color: #fff;
}

#nav .subnav{
    display: none;
    position: absolute;
    background-color: #fff;
    color: pink;
    top:100%;
    left: 0;
    width: 148px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
#nav .subnav li {
    display: block;
}
#nav .subnav a {
    color: #000;
    text-decoration: none;
    padding: 0 12px;
    line-height: 38px;
}
#nav li:hover .subnav{
    display: block;
}

</style>