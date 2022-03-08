<template>
    <Slider />
    <ListProduct />
    <!-- <Banner /> -->
    <Footer />
    <Message />
</template>

<script>
import Slider from "@/components/Slider.vue";
// import Banner from "@/components/Banner.vue";
import ListProduct from "@/components/ListProduct.vue";
import Footer from "@/components/Footer.vue";
import Message from "@/components/Message.vue";
export default {
    name:"Home",
    components:{
        Slider,
        ListProduct,
        // Banner,
        Footer,
        Message
    }
}
</script>

<style>

</style>