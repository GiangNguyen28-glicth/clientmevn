<template>
  <div v-if="proProp" class="col-1 col-5 ml-24">
    <div class="product-img product-flex">
      <img
        @click="productRouter(proProp._id)"
        class="product-img-item"
        :src="proProp.url"
      />
      <label class="label-new">New</label>
    </div>
    <div class="product-des">
      <router-link class="product-rt" :to="{ name: 'productdetail-router', params: {id:proProp._id} }"
        >{{proProp.productname}}</router-link
      >
    </div>
    <span class="price">{{proProp.price}}$</span>
  </div>
  <div class="clear"></div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "ProductItem",
  props: ["proProp"],
  setup() {
    const router = useRouter();
    function productRouter(_id) {
      router.push({ name: "productdetail-router", params: {id:_id} });
    }
    return {
      productRouter,
    };
  },
};
</script>

<style>
.mt {
  margin: 0 12px;
}
.product-flex {
  display: block;
}
.product-flex:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.label-new {
  position: absolute;
  left: 0;
  top: 0;
  padding: 4px;
  background-color: black;
  color: #fff;
  margin: 8px;
}
.product-img {
  position: relative;
  border: 8px solid #ccc;
}
.product-img-item {
  display: block;
  width: 100%;
}
.product-des {
}
.product-rt {
  font-size: 16px;
  color: #000;
  display: block;
  padding: 12px 0px 2px 0px;
  text-decoration: none;
}
.price {
  font-weight: 900;
  font-size: 18px;
  color: #979797;
}
</style>