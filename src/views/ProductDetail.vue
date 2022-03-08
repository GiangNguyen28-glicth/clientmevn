<template>
  <div class="product-detail-nav">
    <div class="shop-des">SHOP</div>
    <div class="url-des">
      <router-link class="nav" :to="{ name: 'home-layout', params: {} }"
        >Home</router-link
      >
      <span>/</span>
      <router-link
        class="nav nav-left"
        :to="{ name: 'home-layout', params: {} }"
        >Shop</router-link
      >
    </div>
  </div>
  <div v-if="product" class="product-detail-inf">
    <div class="config-img">
      <img class="product-img-item" :src="product.url" />
    </div>
    <div class="product-inf">
      <h2>{{ product.productname }}</h2>
      <p class="product-property">Price : {{ product.price }}$</p>
      <p class="product-des">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat
        et esse eveniet exercitationem sunt. Autem non deleniti voluptatibus
        iusto, laudantium suscipit reiciendis consequatur nam tenetur molestias,
        ipsa quam maiores!
      </p>
      <p><i class="ti-check"></i> Satisfaction 100% Guaranteed</p>
      <p><i class="ti-check"></i> Free shipping on orders over $99</p>
      <p><i class="ti-check"></i> 14 day easy Return</p>
      <div class="inline-flex">
        <p class="product-property">Quantity</p>
        <button class="btn-quantity" @click="sub">-</button>
        <input
          v-model.number="quantity"
          class="input-quantity"
          type="number"
          @change="onChange"
        />
        <button class="btn-quantity" @click="add">+</button>
      </div>
      <div class="inline-flex">
        <p class="product-property">Size:</p>
        <select name="" id="" class="cbb">
          <option value="" selected="selected">Choose Your Size</option>
          <option value="">32</option>
          <option value="">32</option>
          <option value="">32</option>
        </select>
      </div>
      <div class="inline-flex">
        <p class="product-property">Color:</p>
        <select name="" id="" class="cbb">
          <option value="" selected="selected">Choose Your Color</option>
          <option value="">32</option>
          <option value="">32</option>
          <option value="">32</option>
        </select>
      </div>
      <div>
        <button @click="addtoCart(product._id)" class="btn-cart">
          <i class="ti-shopping-cart"></i>
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
  <Footer />
  <div v-if="isError" class="message-warning">
    <div class="icon-warning">
      <i class="ti-alert wn"></i>
    </div>
    <div class="message-des-warning">
      <h2>Warning</h2>
      <p>Quantity is not enough</p>
    </div>
    <span class="thick1"></span>
    <div class="warning-close">
      <p @click="onClose">CLOSE</p>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "ProductDetail",
  components: {
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const quantity = ref(1);
    const isError = ref(false);
    store.dispatch("product/findOneProduct", { id: route.params.id });
    const product = computed(() => store.state.product.productdata);
    function sub() {
      if (quantity.value < 2) {
        return;
      }
      quantity.value = quantity.value - 1;
    }
    function add() {
      if (quantity.value >= product.value.quantity) {
        return;
      }
      quantity.value = quantity.value + 1;
    }
    function onChange() {
      if (quantity.value >= product.value.quantity) {
        alert("Not correct");
        quantity.value = 1;
        return;
      }
      if (quantity.value <= 0) {
        alert("Not correct");
        quantity.value = 1;
        return;
      }
    }
    async function addtoCart(productId) {
      const q = quantity.value;
      if(q==1){
        isError.value=true;
        return;
      }
      await store.dispatch("cart/addtoCart", { id: productId, quantity: q });
      router.push({ name: "cart-router" });
    }
    
    function onClose(){
      isError.value = false;
    }
    return {
      product,
      add,
      sub,
      quantity,
      onChange,
      addtoCart,
      isError,
      onClose
    };
  },
};
</script>
<style>

.product-des {
  text-align: justify;
}
.input-quantity {
  width: 50px;
  margin: 0px 6px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.btn-quantity {
  width: 35px;
  height: 35px;
}
.btn-cart {
  color: #fff;
  padding: 12px;
  background-color: #000;
  display: block;
}
.btn-cart:hover {
  cursor: pointer;
  color: #fff;

  padding: 12px;
  background-color: #000;
}
.cbb {
  min-width: 200px;
  width: 35px;
  height: 35px;
}
.product-property {
  min-width: 80px;
  line-height: 35px;
}
.product-img-item {
  width: 100%;
}
.product-price {
  padding: 0;
}
.config-img {
  display: flex;
  border: 6px solid;
  flex-basis: 30%;
}
.product-inf {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 60%;
}
.product-detail-inf {
  display: flex;
  margin-top: 46px;
  justify-content: space-around;
}
.product-detail-nav {
  margin-top: 46px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  height: 100px;
  align-items: center;
}
.shop-des {
  padding: 16px;
  font-size: 24px;
  margin-left: 48px;
}
.url-des {
  padding: 16px;
}
.nav {
  text-decoration: none;
  font-size: 18px;
  margin: 0px 12px;
}
.nav-left {
  margin-right: 90px !important ;
}
.message-warning {
  transform: translateX(410px);
  width: 400px;
  height: 50px;
  background-color: #fff;
  color: #000;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  margin-top: 182px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: warning 0.5s linear forwards;
}
.icon-warning {
  background-color: yellow;
  flex-basis: 20%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.message-des-warning {
  flex-basis: 60%;
  left: 0;
  top: 0;
}
.warning-close {
  flex-basis: 20%;
  margin: auto;
  color: rgb(23, 10, 141);
  border-radius: 8px;
  text-align: center;
  line-height: 50px;
}
.warning-close:hover{
  cursor: pointer;
  opacity: 0.6;
}
.wn {
  font-size: 33px;
  text-align: center;
}
.thick1 {
  background-color: rgb(210, 223, 243);
  width: 2px;
  height: 100%;
}
.message-des-warning h2,
p {
  margin-left: 12px;
}
.message-des-warning h2 {
  font-size: 24px;
  color: rgb(143, 37, 37);
}
.message-des-warning p {
  font-size: 18px;
  color: rgb(231, 128, 128);
}
@keyframes warning {
  to{
    transform: translateX(-10px);
  }
}
</style>
