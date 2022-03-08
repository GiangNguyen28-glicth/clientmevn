import { createApp } from 'vue';
import App from './App.vue';
import "./assets/css/style.css";
import "./assets/fonts/themify-icons/themify-icons.css";
import router from "./router";
import { registerGlobalComponents } from './utils/import';
import store from '@/store/index.js';
import { fireStoreCore } from '@/config/firebase';
const app = createApp(App);
registerGlobalComponents(app);
app.use(router);
app.use(fireStoreCore);
app.use(store);
app.mount("#app");