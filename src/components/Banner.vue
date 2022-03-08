<template>
  <div class="container">
    <div class="banner-title">
      <label class="banner-label">PROMOTION SALE OFF 50%</label>
      <h1 class="banner-title-sub">
        THE
        <span>SUMMER</span>
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <router-link class="text-shop" :to="{ name: 'home-layout', params: {} }"
        >SHOP NOW</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style>
.container {
  margin-right: auto;
  margin-left: auto;
  background: url("~@/assets/img/banner-3.jpg") top center / cover no-repeat;
  height: 482px;
  width: 1332px;
  margin-top: 46px;
}
.banner-title {
  text-align: center;
  padding-top: 120px;
  padding-bottom: 120px;
}
.banner-title-sub {
  font-weight: 900;
  font-size: 100px;
  color: #ccc;
}
.banner-title-sub span {
  color: #000;
}
.banner-label {
  font-size: 40px;
  color: gray;
  font-weight: 300;
}
</style>