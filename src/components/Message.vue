<template>
  <div v-if="temp" class="box">
    <div class="header-box">
      <div class="config-icon">
        <i class="ti-desktop box-icon"> </i>
      </div>
      <p>Red Star</p>
    </div>
    <input class="chat" type="text" placeholder="Type your message ....">
    <i class="ti-angle-double-right send"></i>
    <div class="thick"></div>
  </div>
  <div class="message">
    <img @click="activeMess" class="config-message" :src="require('@/assets/img/message.png')" />
  </div>
</template>

<script>
import { useMessage } from "@/composables/message/useMessage";
export default {
  name:"Message",
  setup(){
    const { temp,changeStatus } = useMessage();
    async function activeMess(){
      await changeStatus()
    }
    return{
      activeMess,
      temp
    }
  }
};
</script>

<style>
.box {
  position: fixed;
  bottom: 82px;
  right: 0;
  margin: 20px 20px;
  height: 400px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}
.box-icon {
  margin: auto;
}
.config-icon {
  border-radius: 20px;
  display: flex;
  background-color: #fff;
  min-width: 40px;
  min-height: 40px;
}
.header-box {
  display: flex;
  background: red;
  border-radius: 4px;
  align-items: center;
  padding: 12px 12px ;
}
.header-box p{
  margin-left: 18px ;
  color: #fff;
}
.message {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px 20px;
  max-height: 60px;
  max-width: 60px;
}
.config-message {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.chat{
  width: 90%;
  outline: none !important;
  margin-top:310px;
  font-size: 16px;
  border: 0px;
  margin-left:8px ;
}
.send:hover{
  cursor: pointer;
  opacity: 0.6;
}
</style>