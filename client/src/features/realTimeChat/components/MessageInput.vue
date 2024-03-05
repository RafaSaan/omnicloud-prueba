<template>
  <div class="messageInputContainer">
    <span class="pi pi-paperclip"></span>
    <input type="text" placeholder="Escribe un mensaje...">
  </div>
</template>

<script>
  export default {
    
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