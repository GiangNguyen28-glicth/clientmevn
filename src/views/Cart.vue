<template>
  <div class="product-detail-nav">
    <div class="shop-des">Cart</div>
    <div class="url-des">
      <router-link class="nav" :to="{ name: 'home-layout', params: {} }"
        >Home</router-link
      >
      <span>/</span>
      <router-link
        class="nav nav-left"
        :to="{ name: 'home-layout', params: {} }"
        >Cart</router-link
      >
    </div>
  </div>
  <div class="ml-32">
    <table class="list-cart">
      <tr class="center">
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th>Action</th>
      </tr>
      <tr v-for="cart in listCart" :key="cart.product._id">
        <td>
          <div class="flex align">
            <div class="img-table">
              <a href="">
                <img class="cart-img" :src="cart.product.url" />
              </a>
            </div>
            <div class="flex-basis flex-1">
              <p>{{ cart.product.productname }}</p>
            </div>
          </div>
        </td>
        <td>{{ cart.product.price }}$</td>
        <td>
          <input
            :id="cart.product._id"
            @change="onchangeQuantity(cart.product._id)"
            class="quantity"
            type="number"
            :value="cart.quantity"
          />
        </td>
        <td>{{ cart.product.price * cart.quantity }} $</td>
        <td class="center">
          <div class="center-items">
            <button class="btn-remove">
              <i class="ti-shopping-cart"></i>
            </button>
            <button class="btn-remove" @click="remove(cart.product._id)">
              <i class="ti-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div class="btn-back ml-32">
    <button class="shop-on" @click="backToShop">
      <i class="ti-angle-left"> </i> CONTINUE SHOPPING
    </button>
    <button class="shop-on" @click="updateCart">UPDATE CART</button>
  </div>
  <div class="margin-32 flex flex-between">
    <div class="flex-basis">
      <h2>Estimate shipping and tax</h2>
      <div class="flex flex-between mt-32">
        <select
          class="flex-basis selectT"
          v-model="onSelectProvince"
          @change="changeProvince"
        >
          <option value="" disabled selected="selected">
            Choose Your Province
          </option>
          <option v-for="pro in province" :key="pro._id" :value="pro">
            {{ pro.name }}
          </option>
        </select>
        <select
          class="flex-basis selectT"
          v-model="onSelectDistrict"
          @change="changeDistrict"
        >
          <option value="" disabled selected="selected">
            Choose Your District
          </option>
          <option
            v-for="district in listDictrict"
            :key="district"
            :value="district"
          >
            {{ district.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-between">
        <select class="flex-basis selectT" name="" id="" v-model="onSelectWard">
          <option value="" disabled selected="selected">
            Choose Your Wards
          </option>
          <option v-for="ward in listWards" :key="ward" :value="ward.name">
            {{ ward.name }}
          </option>
        </select>
        <input
          class="flex-basis"
          type="text"
          placeholder="Type your name ...."
        />
      </div>
    </div>
    <div class="flex-basis">
      <table class="list-cart">
        <tr>
          <th>Cart Total</th>
          <th>Price</th>
        </tr>

        <tr>
          <td>Item(s) Subtotal</td>
          <td v-if="totalPrice">{{totalPrice}}$</td>
          <td v-else>0$</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td v-if="totalPrice">{{shipping}}$</td>
          <td v-else>0$</td>
        </tr>
        <tr>
          <td>Amount</td>
          <td v-if="totalPrice">{{totalPrice-shipping}}</td>
          <td v-else>0$</td>
        </tr>
      </table>
      <button class="shop-on mtop-12 float-right" @click="checkout">
        <i class="ti-angle-right"> </i> PROCESS TO CHECKOUT
      </button>
    </div>
  </div>
  <Footer></Footer>
</template>
<script>
import Footer from "@/components/Footer.vue";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Cart",
  components: {
    Footer,
  },
  setup() {
    const onSelectProvince = ref("");
    const onSelectDistrict = ref("");
    const onSelectWard = ref("");
    const store = useStore();
    const listD = ref([]);
    const listW = ref([]);
    const listC = ref([]);
    const router = useRouter();
    const quantity = ref(0);
    const productId = ref("");
    const shipping = ref(2);
    store.dispatch("location/getAllLocation");
    const province = computed(() => {
      if (store.state.location.province.length != 0) {
        return store.state.location.province;
      }
      return [];
    });

    const listDictrict = computed(() => {
      return listD.value;
    });
    async function changeProvince() {
      if (onSelectProvince.value.code == undefined) {
        return;
      }
      await store.dispatch(
        "location/getAllDistrict",
        onSelectProvince.value.code
      );
      listD.value = store.getters["location/getdistricts"];
    }

    function backToShop() {
      router.push({ name: "home-layout" });
    }
    async function changeDistrict() {
      if (onSelectDistrict.value.code == undefined) {
        return;
      }
      await store.dispatch("location/getAllWards", onSelectDistrict.value.code);
      listW.value = store.state.location.wards;
    }
    const listWards = computed(() => {
      return listW.value;
    });

    async function getListCart() {
      await store.dispatch("cart/getListCart");
      listC.value = store.state.cart.listCart;
    }
    async function remove(id) {
      await store.dispatch("cart/deleteProduct", id);
      listC.value = store.state.cart.listCart;
    }
    function onchangeQuantity(id) {
      quantity.value = document.getElementById(id).value;
      productId.value = id;
    }
    async function updateCart(){
      if(quantity.value==0){
        return;
      }
      await store.dispatch("cart/updateCart",{id:productId.value,quantity:quantity.value})
      listC.value = store.state.cart.listCart;
    }
    const totalPrice = computed(()=>store.getters['cart/totalPrice']);
    onMounted(getListCart);
    const listCart = computed(() => listC.value);
    async function checkout(){
      await store.dispatch("cart/checkout");
      window.location.href = store.state.cart.url;
    }
    return {
      onSelectProvince,
      onSelectDistrict,
      onSelectWard,
      province,
      changeProvince,
      listDictrict,
      changeDistrict,
      listWards,
      listC,
      listCart,
      getListCart,
      backToShop,
      remove,
      quantity,
      onchangeQuantity,
      updateCart,
      productId,
      totalPrice,
      shipping,
      checkout
    };
  },
};
</script>

<style>
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
.product-detail-nav {
  margin-top: 46px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  height: 100px;
  align-items: center;
}
.list-cart {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 48px;
}
.list-cart td,
.list-cart th {
  border: 4px solid #ddd;
  padding: 8px;
  text-align: center;
}
.list-cart th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  text-align: center;
}
.btn-remove {
  width: 35px;
  height: 35px;
  margin: 0px 6px;
  background-color: #06dd8e;
  font-size: 18px;
}
.btn-remove:hover {
  cursor: pointer;
}
.btn-back {
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
}
.shop-on {
  padding: 16px;
  background-color: #fff;
}
.shop-on:hover {
  cursor: pointer;
}
.selectT {
  padding: 16px;
}
.img-table {
  flex-basis: 20%;
}
.cart-img {
  max-width: 60px;
  max-height: 60px;
}
.quantity {
  width: 50px;
  margin: 0px 6px;
}
</style>