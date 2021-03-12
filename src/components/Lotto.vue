<template>
  <div class="lottoContainer">
    <button @click="getFullNumber">Get Number!</button>
    <ul class="winningNumberWrapper">
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "lotto",
  data() {
    return {
      numbers: [],
    };
  },
  methods: {
    getFullNumber: () => {
      const fullNumber = Array(45)
        .fill()
        .map((n, i) => {
          return i + 1;
        });
      let shuffle = [];
      while (fullNumber.length > 0) {
        shuffle.push(
          fullNumber.splice(Math.floor(Math.random() * fullNumber.length), 1)[0]
        );
      }
      const winNumber = shuffle.splice(0, 6).sort((a, b) => {
        return a - b;
      });
      console.log(winNumber);
      for (let i=0; i<winNumber.length; i++) {
        // console.log("numbers: " + this.numbers);
        console.log(winNumber[i]);
      }
      console.log("numbers: ");
    },
  },
  created() {},
};
</script>

<style></style>
