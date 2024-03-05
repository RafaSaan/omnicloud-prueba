import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('store', () => {
  const chatList = ref([])
  const currentChatId = ref('')
  const currentChat = ref({})

  const existsChat = chatId => {
    let exists = false
    chatList.value.forEach((element, index) => {
      if(element.id === chatId) {
        exists = true
      }
    });
    return exists
  }

  const addChat = chatId => {
    currentChatId.value = chatId
    if (!existsChat(chatId)) {
      chatList.value.push({
        id: chatId,
        messages: []
      })
    }
    getCurrentChat()
  }

  const addMessage = (message) => {
    chatList.value.forEach((element, index) => {
      if(element.id === currentChatId.value) {
        chatList.value[index].messages.push(message)
      }
    });
    getCurrentChat()
  }

  const getCurrentChat = () => {
    currentChat.value = chatList.value.find((chat) => chat.id === currentChatId.value)
  }

  const setGuestChat = () => {
    addChat('guest')
  }

  return { chatList, addChat, addMessage, currentChat, setGuestChat, currentChatId  }
})