<template>
  <div class="userList">
    <div class="userListHeader">
      <div class="titleSection">
        <span class="pi pi-cloud" style="font-size: 1.5rem; color: #65BCF2;"></span>
        <span class="title">Omnicloud Chat</span>
      </div>
      <div class="inputContainer">
        <input type="text">
        <span class="pi pi-search iconSearch" style="font-size: .8rem"></span>
      </div>
    </div>
    <ul class="usersContainer">
      <li class="userItem selected" v-for="user in users">
        <div class="userIcon">
          {{ getFirstCharacter(user.name.first) }}
        </div>
        <div class="userData">
          <div class="username">
            <span>{{user.name.first}}</span>
            <span class="lastName">{{user.name.last}}</span>
          </div>
          <span class="messageCaption">last message</span>
        </div>
        <div class="chatDetails">
          <span>1:12</span>
          <span>o</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

onMounted(()=> {
  getUsers()
})

const users = ref([])

async function getUsers() {
  const response = await axios.get('https://randomuser.me/api/?results=6')
  users.value = response.data.results
}

const getFirstCharacter = ((name) => {
  return name.charAt(0);
})

</script>

<style scoped>
.userList {
  padding: .5rem;
  color: #000;
}
.titleSection {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 1rem;
}
.title {
  font-size: 17px;
  font-weight: 500;
}
.inputContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: #fff;
  border-radius: 8px;
  padding: 2px;
  width: 225px;
  -webkit-box-shadow: 0px 0.5px 1px 1px rgb(206, 206, 206);
  -moz-box-shadow: 0px 0.5px 1px 1px rgba(206, 206, 206);
  box-shadow: 0px 0.5px 1px 1px rgba(206, 206, 206);
}
.iconSearch {
  margin-right: .5rem;
  color: rgb(0, 0, 0, .7);
}
input {
  border: none;
  padding: 5px;
}
input:focus {
  outline: none;
}
.usersContainer {
  margin-top: 1rem;
  height: 100%;
  overflow-y: auto;
  border-top: 1px solid rgb(0, 0, 0, .2);
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.userItem {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: .7rem 0;
  padding: 1rem 0;
}
.userIcon {
  width: 35px;
  height: 35px;
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
.userData {
  width: 150px;
  display: flex;
  flex-direction: column;
}
.messageCaption {
  font-size: 12px;
  color: rgb(0, 0, 0, .7);
}
.username > span {
  font-size: 16px;
  font-weight: 400;
}
.lastName {
  margin-left: 5px;
}
.chatDetails {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  font-size: 13px;
  color: rgb(0, 0, 0, .7);
  margin: 0 1rem;
}
.selected {
  background-color: #E6EAF0;
  border-radius: 8px;
}
</style>