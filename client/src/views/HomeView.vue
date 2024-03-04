<script setup>
import UserList from '@/features/realTimeChat/components/UserList.vue';
import ChatContainer from '@/features/realTimeChat/components/ChatContainer.vue';
</script>

<template>
  <main class="mainView">
    <UserList/>
    <ChatContainer/>
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
