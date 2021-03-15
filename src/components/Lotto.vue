<template>
  <div class="lottoContainer">
    <button v-if="numbers.length < 6" @click="getRandomNumbers">
      Get Numbers!
    </button>
    <button v-if="numbers.length == 6" @click="getRandomNumbersAgain">
      Again!
    </button>
    <ul class="winningNumberWrapper">
      <li
        class="lottoBall"
        v-for="number in numbers"
        :key="number"
      >
        {{ number }}
      </li>
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
    getRandomNumbers() {
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
      for (let i = 0; i < winNumber.length; i++) {
        this.numbers.push(winNumber[i]);
      }
      console.log(this.numbers);
    },
    getRandomNumbersAgain() {
      this.numbers = [];
      this.getRandomNumbers();
    },
  },
};
</script>

<style lang="scss">
.lottoContainer .winningNumberWrapper {
  display: flex;
  margin-top: 50px;
  text-align: center;
}
.lottoContainer .winningNumberWrapper li {
  list-style: none;
  margin-right: 20px;
}
.lottoContainer .winningNumberWrapper li {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 21px;
}
</style>
