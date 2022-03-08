<template>
  <div class="list-product">
    <h2 class="text-featured">
      FEATURED
      <span class="text-product">PRODUCTS</span>
    </h2>
    <div class="featured-product">
      <ProductItem v-for="product in products" :key="product._id" :proProp="product" />
    </div>
    <div class="featured-product">
      <ProductItem v-for="product in products2" :key="product._id" :proProp="product" />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { useStore } from "vuex";
import { computed } from 'vue';
export default {
  name: "ListProduct",
  components: {
    ProductItem,
  },
  setup(){
    const store = useStore();
    store.dispatch("product/getAllProducts");
    const products = computed(()=> {
      console.log("Running Home...")
      return store.state.product.products.slice(0,5)
    })
    const products2 = computed(()=> store.state.product.products.slice(5,10))
    return{
      products,products2
    }
  }
};
</script>
<style>
.list-product {
  margin-top: 100px;
}
.text-featured {
  margin-left: 94px;
  font-weight: 900;
  font-size: 36px;
}
.text-product {
  color: #ccc;
}
.featured-product {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
}
</style>