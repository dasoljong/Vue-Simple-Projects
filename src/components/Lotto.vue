<template>
  <div class="lottoContainer">
    <button @click="pushNumbToArr">Get Number!</button>
    <h2>Winning Num</h2>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "lotto-app",
  data() {
    return {
      numbers: [],
      selectedNum: "",
      selectedNumbs: [],
      winningNumbs: [],
    }
  },
  methods: {
    getFullNumb: function(){
      for(let i=1; i<61; i++) {
        this.numbers = this.numbers + i +" ";
      }
      this.numbers = this.numbers.split(" ");
      this.numbers.splice(60, 1);
    },
    getRandomNumb: function(min, max){
        min = Math.ceil(1);
        max = Math.floor(60);
        this.selectedNum = Math.floor(Math.random() * (max - min + 1)) + min;

        console.log(this.selectedNum);

    },
    pushNumbToArr: function() {
      this.getRandomNumb();

      if(this.winningNumbs.length < 6) {
        console.log("1");

        for(let i=0; this.numbers.length; i++) {
          console.log("2");
          if(this.numbers[i] == this.selectedNum) {
            console.log("3");
            // console.log(this.selectedNum);
          } else {
            console.log("4");
            this.winningNumbs.push(this.selectedNum);
            this.winningNumbs.sort(function (a,b) {
              return a-b
            });
            console.log("5");
          }
        }
        console.log(this.winningNumbs);
      }
    }
  },
  created() {
    this.getFullNumb();
    // this.getRandomNumb();
  }
}
</script>

<style>

</style>