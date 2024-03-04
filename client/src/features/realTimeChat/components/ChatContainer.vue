<script setup>
const props = defineProps(['user', 'isUserSelected'])

</script>
<template>
  <div class="chatContainerView">
    <div class="chatHeader">
      <div class="userInfo" v-if="isUserSelected">
        <div class="userIcon" :style="{backgroundColor: user.backgroundColor}">{{ user.name.first.charAt(0) }}</div>
        <div class="username"><span>{{ user.name.first }}</span> <span>{{ user.name.last }}</span></div>
      </div>
    </div>
    <div class="chatContainer">
      chat container
    </div>
  </div>
</template>


<style scoped>
.chatContainerView {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.userIcon {
  width: 45px;
  height: 45px;
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
.chatHeader {
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(0, 0, 0, .2);
}
.userInfo {
  display: flex;
  align-items: center;
  margin-left: 3rem;
}
.username > span {
  font-size: 19px;
  font-weight: 600;
}
.chatContainer {
  width: 100%;
  background-color: #fff;
  height: 100%;
  border-bottom: 1px solid rgb(0, 0, 0, .2);
  border-right: 1px solid rgb(0, 0, 0, .2);
}

</style>