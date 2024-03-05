<script setup>
import { ref } from 'vue'
import ChatContainer from '@/features/realTimeChat/components/ChatContainer.vue';
import { useChatStore } from '../store/chat';
const user = ref({
  name: {first: 'Guest', last: ''},
  picture: null,
  login: {
    uuid: 'guest'
  }
});
const store = useChatStore()
store.setGuestChat()
</script>

<template>
  <main class="guestView">
    <ChatContainer :user="user" :isUserSelected="true"/>
  </main>
</template>
<style scoped>
.guestView {
  width: 100%;
  height: 550px;
  display: flex;
  background-color: #EFF3F9;
  border-radius: 8px;
  overflow: hidden;
}
</style>
