<script setup>
import { ref } from 'vue'
import UserList from '@/features/realTimeChat/components/UserList.vue';
import ChatContainer from '@/features/realTimeChat/components/ChatContainer.vue';
const currentUserSelected = ref(null);
const isUserSelected  = ref(false);

function setCurrentUserSelected (user) {
  currentUserSelected.value = user
  isUserSelected.value = true
  console.log(currentUserSelected.value)
}
</script>

<template>
  <main class="mainView">
    <UserList @setCurrentUserSelected="setCurrentUserSelected"/>
    <ChatContainer :user="currentUserSelected" :isUserSelected="isUserSelected"/>
  </main>
</template>
<style scoped>
.mainView {
  width: 100%;
  height: 550px;
  display: flex;
  background-color: #EFF3F9;
  border-radius: 8px;
  overflow: hidden;
}
</style>
