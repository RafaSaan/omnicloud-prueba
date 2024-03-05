<template>
  <div class="userList">
    <div class="userListHeader">
      <div class="titleSection">
        <span class="pi pi-cloud" style="font-size: 1.5rem; color: #65BCF2;"></span>
        <span class="title">Omnicloud Chat</span>
      </div>
      <div class="inputContainer">
        <input type="text" name="filter input" placeholder="Buscar" v-model="search" @input="filterByName">
        <span class="pi pi-search iconSearch" style="font-size: .8rem"></span>
      </div>
    </div>
    <ul class="usersContainer">
      <transition name="fade" mode="out-in">
        <li class="userItem selected" v-if="isLoading">
          <div class="userIcon skeleton" :style="{backgroundColor: '#BFC3C7'}">
          </div>
          <div class="userData">
            <div class="username skeletonBar" style="height: 15px;">
              <span style="width: 140px;height: 15px; display: flex;" class="skeleton"></span>
            </div>
            <span class="skeleton" style="width: 50px;height: 15px; display: flex; border-radius: 7px; margin-top: 2px;"></span>
          </div>
          <div class="chatDetails">
            <span class="skeleton" style="width: 20px;height: 15px; border-radius: 7px;"></span>
          </div>
        </li>
        <div class="usersList" v-else >
          <li
            :class="user.login.uuid === currentUserIdSelected ? 'selected' : ''"
            class="userItem"
            v-for="user in users"
            @click="setCurrenUserConfig(user)">
            <img class="userIcon" :src="user.picture.thumbnail" alt="user profile"/>
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
        </div>
          
      </transition>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useChatStore } from '../store/chat';

const emit = defineEmits(['setCurrentUserSelected'])
onMounted(()=> {
  getUsers()
})

const store = useChatStore()
const users = ref([])
const isLoading = ref(true)
const currentUserIdSelected = ref('')
const search = ref('')
let usersCopy = []

async function getUsers() {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=6')
    users.value = response.data.results
    usersCopy = response.data.results
    isLoading.value = false
  }
  catch {
    isLoading.value = false
  }
}

function setCurrenUserConfig(user) {
  currentUserIdSelected.value = user.login.uuid
  store.addChat(user.login.uuid)
  emit('setCurrentUserSelected', user)
}

const filterByName = (() => {
  if (search.value === '') {
    users.value = usersCopy
    return
  }
  const userFilter = users.value.filter((user) =>
    user.name.first.toString().toLowerCase().indexOf(search.value) > -1
  );

  users.value = userFilter
})

</script>

<style scoped>

@keyframes pulse-bg {
  0% {
    background-color: #ddd
  }
  50% {
    background-color: #d0d0d0
  }
  100% {
    background-color: #ddd
  }
}

.skeleton {
  border-radius: 14px;
  animation: pulse-bg 1s infinite
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.userList {
  padding: .5rem;
  color: #000;
  border-right: 1px solid rgb(0, 0, 0, .2);
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
@media (max-width: 650px) {
  .usersContainer {
    height: auto;
  }
  .lastName, .messageCaption, .chatDetails {
    display: none;
  }
  .userItem {
    width: 50px;
    height: 70px;
    flex-direction: column;
    padding: 0;
  }
  .usersList {
    display: flex;
  }
  .username > span, .username {
    font-size: 10px;
    text-align: center;
  }
  .userData {
    max-width: 50px;
    text-overflow: ellipsis;
  }
  .skeletonBar {
    display: none;
  }
}
</style>