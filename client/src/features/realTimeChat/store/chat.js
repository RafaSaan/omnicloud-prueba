import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('store', () => {
  const messagesList = ref([
    {
      id: ''
    }
  ])
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})