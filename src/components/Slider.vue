<template>
  <div class="banner">
    <div class="row slider">
      <div class="col col-half">
        <div class="slider-img"></div>
      </div>
      <div class="col col-half">
        <label class="text-label">GET UP TO 40% OFF</label>
          <h2 class="text-man">
            MEN
            <span class="text-shoes">SHOES</span>
          </h2>
          <p class="text-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            esse quas doloribus unde aperiam quaerat Similique esse quas
            doloribus unde aperiam quaerat
          </p>
          <router-link
            class="text-shop"
            :to="{ name: 'home-layout', params: {} }"
            >SHOP NOW</router-link
          >
      </div>
      <div class="clear"></div>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
export default {
  name: "Slider",
};
</script>

<style>
.banner{
  background-color: #f5f5f5;
  margin-top: 46px;
}
.slider {
  padding: 50px 0;
}
.slider-img {
  padding-top: 50%;
  background: url("~@/assets/img/banner.jpg") top center / cover no-repeat;
}
.text-label {
  letter-spacing: 4px;
  font-size: 40px;
}
.text-man {
  font-weight: 900;
  color: black;
  font-size: 60px;
}
.text-shoes {
  color: #ccc;
  display: block;
}
.text-info {
  font-size: 14px;
  color: #2d3031;
  margin-top: 14px;
}
.text-shop {
  text-decoration: none;
  border: 1px solid #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-size: 24px;
  padding: 16px;
  color: #000;
  margin-top: 40px;
  display:inline-block;
  transition: all 0.2s linear;
}
.text-shop:hover{
  background-color: pink;
  color: blue;
}
</style>