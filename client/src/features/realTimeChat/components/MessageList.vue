<template>
  <ul class="messageListContainer" id="messageListContainer">
    <li
      v-for="message in store.currentChat.messages"
      class="messageItem"
      :class="message.from === 'me' ? 'myMessage' : 'messageFrom'">
      {{ message.body }}
    </li>
  </ul>
</template>

<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useChatStore } from '../store/chat';
const store = useChatStore()

const { currentChat } = storeToRefs(store);

watch(() => currentChat.value, () => {
  goToBottom()
},{ deep: true })

function goToBottom() {
  if (!document.querySelectorAll(".messageItem").length) return
  const container = document.getElementById("messageListContainer");
  const element = document.querySelectorAll(".messageItem");
  const bottom = element[element.length -1].offsetTop
  container.scrollTop = bottom; 
}





</script>

<style scoped>
.messageListContainer {
  max-height: 365px;
  width: 100%;
  overflow-y: auto;
}
ul {
  list-style: none;
  padding: 2rem;
}
li {
  padding: 2rem;
}
.messageItem {
  font-size: 16px;
  clear: both;
  margin-bottom: 8px;
  padding: 2px 14px;
  vertical-align: top;
  border-radius: 10px;
}
.myMessage {
  float: right;
  color: #fff;
  background-color: #65BCF2;
}
.messageFrom {
  float: left;
  background-color: #EDEFF2;
}

.messageListContainer::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.messageListContainer::-webkit-scrollbar-track {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
}
.messageListContainer::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}
.messageListContainer::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}
.messageListContainer::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0.9);
}

</style>