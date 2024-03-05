<template>
  <div class="messageInputContainer">
    <span class="pi pi-paperclip"></span>
    <input
      @keyup.enter="onSubmit"
      type="text"
      placeholder="Escribe un mensaje..."
      name="messageInput"
      v-model="message.body">
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useChatStore } from "../store/chat";
import { sendMessageHelper } from '../helpers/chatHelper';

  export default {
    props: ['chatId'],
    data() {
      return {
        isLoading: false,
        message: {
          body: '',
          from: 'me' 
        }
      }
    },
    methods: {
      ...mapActions(useChatStore, ['addMessage']),
      onSubmit() {
        if (this.message.body === '') return
        sendMessageHelper(this.message.body)
        this.addMessage({...this.message}) 
        this.message.body = ''
      },
    },
    
  }
</script>

<style scoped>
.messageInputContainer {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #EDEFF2;
  border-radius: 8px;
  padding: 2px;
  width: 60%;
  height: 35px;
  margin: 1rem;
}
.messageInputContainer > span {
  cursor: pointer;
  margin-left: 1rem;
}
input {
  border: none;
  padding: 5px;
  background: none;
  width: 80%;
}
input:focus {
  outline: none;
}
</style>