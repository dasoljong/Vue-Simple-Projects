<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <AddressBook />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import AddressBook from './components/AddressBook.vue';

export default {
  name: 'App',
  components: {
    AddressBook,
  }
}
</script>

<style>
#app {
  padding: 100px;
  margin: 0 auto;
}
</style>
