<script setup>
import { computed } from "vue";
import { socket } from "@/socket";
import MessageInput from './MessageInput.vue'
import MessageList from './MessageList.vue'
import { useChatStore } from "../store/chat";

const props = defineProps(['user', 'isUserSelected'])
const store = useChatStore()

socket.on("message", message => {
  store.addMessage(message)
});


</script>
<template>
  <div class="chatContainerView">
    <div class="chatHeader">
      <div class="userInfo" v-if="isUserSelected">
        <img v-if="user.picture" class="userIcon" :src="user.picture.thumbnail" alt="user profile"/>
        <div v-else class="userIcon">G</div>
        <div class="username"><span>{{ user.name.first }}</span> <span>{{ user.name.last }}</span></div>
      </div>
    </div>
    <div class="noUserSelected" v-if="!isUserSelected">
      ¡Bienvenido!
    </div>
    <div class="chatContainer" v-else>
      <MessageList/>
      <MessageInput :chatId="user.login.uuid"/>
    </div>
  </div>
</template>


<style scoped>
.chatContainerView {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.userIcon {
  width: 45px;
  height: 45px;
  background-color: #65BCF2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  margin: .5rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 17px;
}
.chatHeader {
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(0, 0, 0, .2);
}
.userInfo {
  display: flex;
  align-items: center;
  margin-left: 3rem;
}
.username > span {
  font-size: 19px;
  font-weight: 600;
}
.chatContainer {
  width: 100%;
  background-color: #fff;
  height: 100%;
  border-bottom: 1px solid rgb(0, 0, 0, .2);
  border-right: 1px solid rgb(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.noUserSelected {
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
@media (max-width: 650px) {
  .chatContainer {
    height: 350px;
  }
}

</style>