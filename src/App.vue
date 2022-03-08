<template>
  <component :is="layout"> </component>
  
  <router-view />
</template>

<script>
import {useRoute} from 'vue-router';
import {computed} from 'vue';
export default {
  name: 'App',
  components: {

  },
  setup() {
    const route=useRoute()
    return{
      layout:computed(()=>(route.meta.layout+'-layout'))
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: relative;
}
</style>
