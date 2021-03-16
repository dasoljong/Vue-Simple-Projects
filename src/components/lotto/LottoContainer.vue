<template>
  <div class="lottoContainer">
    <button v-if="finalNumbers.length === 0" @click="getRandomNumbers">
      Get Numbers!
    </button>
    <button v-if="finalNumbers.length === 6" @click="getOtherNumbers">
      Get other numbers!
    </button>
    <lotto-ball :numbers="finalNumbers"></lotto-ball>
  </div>
</template>

<script>
import LottoBall from "@/components/lotto/LottoBall";

export default {
  name: "lotto-container",
  components: { LottoBall },
  data() {
    return {
      finalNumbers: [],
    };
  },
  methods: {
    getRandomNumbers() {
      const fullNumbers = Array(45)
        .fill()
        .map((v, i) => {
          return i + 1;
        });
      let shuffle = [];
      while (fullNumbers.length > 0) {
        shuffle.push(
          fullNumbers.splice(
            Math.floor(Math.random() * fullNumbers.length),
            1
          )[0]
        );
      }
      let winningNumbers = shuffle.splice(0, 6).sort((a, b) => {
        return a - b;
      });
      for (let i = 0; i < winningNumbers.length; i++) {
        this.finalNumbers.push(winningNumbers[i]);
      }
    },
    getOtherNumbers() {
      this.finalNumbers = [];
      this.getRandomNumbers();
    },
  },
};
</script>
