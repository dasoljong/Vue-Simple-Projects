<template>
  <div class="countdownTimerContainer">
    <div class="backgroundImg"></div>
  </div>
</template>

<script>
export default {
  name: "Countdown Timer",
};
</script>

<style lang="scss">
.countdownTimerContainer {
  width: 100%;
  height: auto;
  .backgroundImg {
    background-image: url("https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3670&q=80");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
</style>
