<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <BookInfo />
    <Kakao />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import BookInfo from './components/BookInfo.vue';
import Kakao from './components/Kakao.vue';

export default {
  name: 'App',
  components: {
    BookInfo,
    Kakao,
  }
}
</script>

<style>
#app {
  padding: 100px;
  margin: 0 auto;
}
</style>
