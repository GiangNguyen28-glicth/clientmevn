<template>
  <input v-model="message" type="text" />
  <button @click="sendMessage">Send</button>
  <button @click="test">Test</button>
  <span v-if="selectUser">{{ selectUser }}</span>
  <ul>
    <li v-for="user in getAllUsers" :key="user._id">
      <button @click="onSelectUser(user._id)">
        <span>{{ user.username }}</span>
      </button>
    </li>
  </ul>
  <span v-if="selectUser">{{ selectUser }}</span>
  <div class="message-box">
    <ul v-if="messageOfSender">
      <li v-for="mess in messageOfSender" :key="mess._id">
        {{ mess.message }}
      </li>
    </ul>
  </div>
  <div class="red">
    <ul v-if="messageOfReceiver">
      <li v-for="mess in messageOfReceiver" :key="mess._id">
        {{ mess.message }}
      </li>
    </ul>
  </div>
</template>
<script>
import socket from "@/config/socket";
import { ref, onUnmounted, onMounted, computed } from "vue";
export default {
  setup() {
    const message = ref("");
    const users = ref([]);
    const selectUser = ref();
    const messageOfSender = ref([]);
    const messageOfReceiver = ref([]);
    async function sendMessage() {
      socket.emit("message", {
        sender: socket.id,
        toUser: selectUser.value,
        message: message.value,
      });

    }
    function onSelectUser(user) {
      selectUser.value = user;
      socket.emit("listmessage", {
        sender: socket.id,
        receiverId: selectUser.value,
      });
    }
    const getAllUsers = computed(() => {
      return users.value;
    });
    onMounted(() => {
      socket.on("users", (data) => {
        users.value = data;
      });
      socket.on("privateMessage", (data) => {
        messageOfReceiver.value.push(data);
      });
      socket.on("usersconnected", (data) => {
        users.value = data;
      });
      socket.on("getlistmessage", (data) => {
        messageOfSender.value = data.messofSender;
        messageOfReceiver.value = data.messofReceiver;
      });
      socket.on("senderMessage",(data)=>{
        messageOfSender.value.push(data);
      });
    });
    onUnmounted(() => {
      socket.off("message");
      socket.off("users");
    });
    return {
      message,
      sendMessage,
      getAllUsers,
      onSelectUser,
      selectUser,
      messageOfSender,
      messageOfReceiver,
    };
  },
};
</script>

<style>
.message-box {
  background-color: blue;
}
.red {
  background-color: red;
}
</style>