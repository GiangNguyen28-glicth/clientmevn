import { defineAsyncComponent } from 'vue';
export function registerGlobalComponents (app){
    app.component('home-layout',defineAsyncComponent(()=>import("@/layouts/home")));
    app.component('auth-layout',defineAsyncComponent(()=>import("@/layouts/auth")));
}