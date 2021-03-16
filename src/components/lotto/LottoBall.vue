<template>
  <div class="lottoBallContainer">
    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "lotto-ball",
  props: {
    numbers: [],
  },
  data() {
    return {};
  },
};
</script>

<style>
.lottoBallContainer ul li {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 21px;
  margin-top: 50px;
}
</style>
