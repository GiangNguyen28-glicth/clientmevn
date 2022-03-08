<template>
  <AddProduct :productProps="data" />
</template>

<script>
import AddProduct from "@/components/AddProduct.vue";
import { useCategory } from "@/composables/category/useCategory";
import { ref} from "vue";
export default {
  name: "AdminProduct",
  components: {
    AddProduct,
  },
  setup() {
    const { error, isPending, usegetCategories } = useCategory();
    let data = ref([]);
    async function getCategories() {
      const res = await usegetCategories();
      data.value = res.data;
      // console.log(data);
    }
    getCategories();
    return {
      error,
      isPending,
      data:data
    };
  },
};
</script>

<style>
</style>