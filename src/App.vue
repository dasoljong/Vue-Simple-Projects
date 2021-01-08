<template>
  <div id="app">
    <BookInfo />
    <UserProfile />
    <RandomUser />
    <Weather />
  </div>
</template>

<script>
import BookInfo from './components/BookInfo.vue';
import UserProfile from "./components/UserProfile.vue";
import RandomUser from "./components/RandomUser.vue";
import Weather from "./components/Weather.vue"


export default {
  name: 'App',
  components: {
    UserProfile,
    BookInfo,
    RandomUser,
    Weather,
  }
}
</script>

<style>
#app {
  padding: 100px;
  margin: 0 auto;
}
</style>
