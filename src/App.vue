<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <BookInfo />
    <UserProfile />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import BookInfo from './components/BookInfo.vue';
import UserProfile from "@/components/UserProfile";

export default {
  name: 'App',
  components: {
    UserProfile,
    BookInfo,
  }
}
</script>

<style>
#app {
  padding: 100px;
  margin: 0 auto;
}
</style>
