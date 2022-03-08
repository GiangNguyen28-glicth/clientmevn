<template>
  <div class="form-product">
    <form action="" @submit.prevent="onSubmit">
      <label for="productname" class="text-product">Product Name</label>
      <input
        class="input-product"
        type="text"
        name="Product"
        id="productname"
        placeholder="Type your Product Name"
        v-model="productname"
      />
      <div class="thick"></div>
      <label class="text-product" for="quantity">Quantity</label>
      <input
        class="input-product"
        type="number"
        id="quantity"
        placeholder="Type product quantity"
        v-model="quantity"
      />
      <div class="thick"></div>
      <select id="category" v-model="categoryname">
        <option disabled value="">Please select one</option>
        <option
          v-for="item in productProps"
          :key="item._id"
          :value="item.categoryname"
        >
          {{ item.categoryname }}
        </option>
      </select>
      <button class="btn-product" type="submit">Add</button>
      <br />
      <p v-if="error">{{ error }}</p>
    </form>
    <input type="file" @change="previewImage" />
    <button @click="onUpload">Upload</button>
    <p>
      Progress:{{ uploadValue.toFixed() + "%"
      }}<progress :value="uploadValue" max="100"></progress>
    </p>

    <img :src="picture" alt="" />
  </div>
  <div>
    <li v-for="ca in categories" :key="ca._id">{{ca.categoryname}}</li>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useProduct } from "@/composables/product/useProduct";
import firebase from "firebase/app";
export default {
  name: "AddProduct",
  props: ["productProps"],
  setup() {
    const productname = ref("");
    const categoryname = ref("");
    const quantity = ref(0);
    const imgData = ref(null);
    const picture = ref(null);
    const uploadValue = ref(0);
    const { error, isPending, addProduct } = useProduct();
    async function onSubmit() {
      await addProduct(productname.value, quantity.value,picture.value, categoryname.value);
    }
    const store = useStore();
    store.dispatch("category/getAllCategories");
    const categories = computed(() => store.state.category.categories);
    function previewImage(event) {
      uploadValue.value = 0;
      picture.value = null;
      imgData.value = event.target.files[0];
    }
    function onUpload() {
      picture.value = null;
      const metadata = {
        contentType: imgData.value.type,
      };
      const storeRef = firebase
        .storage()
        .ref(`${imgData.value.name}`)
        .put(imgData.value,metadata);
      storeRef.on(
        `state_changed`,
        () => {
          uploadValue.value = 50;
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadValue.value = 100;
          storeRef.snapshot.ref.getDownloadURL().then((url) => {
            console.log(url);
            picture.value = url;
          });
        }
      );
    }
    return {
      categories,
      error,
      isPending,
      onSubmit,
      categoryname,
      productname,
      quantity,
      imgData,
      picture,
      uploadValue,
      previewImage,
      onUpload,
    };
  },
};
</script>

<style>
.form-product {
  /* margin-left: 25%;
  margin-right: 25%;
  width: 50%; */
  display: block;
  text-align: center;
}
.form-product form {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
.input-product {
  display: block;
  border: 0px;
  outline: none;
  padding: 12px;
}
.btn-product {
  display: block;
}
.text-product {
  padding: 12px;
}
#category {
  padding: 6px;
  margin: 12px 0;
  border-radius: 6px;
}
.btn-product {
  border: 1px solid #000;
  padding: 12px 24px;
  background-color: #fff;
  border-radius: 6px;
}
.btn-product:hover {
  cursor: pointer;
  background-color: #ccc;
  color: blue;
}
</style>