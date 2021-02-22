<template>
  <div class="lottoContainer">
    <button>Get Number!</button>
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
      number: [],
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
    getWinningNumb: function(min, max){
      for (let i=0; i<6; i++){
        if(i<6) {
          min = Math.ceil(1);
          max = Math.floor(60);
          let selectedNum =  Math.floor(Math.random() * (max-min + 1)) + min;
          this.number = this.number + selectedNum + " ";
        }
      }
      this.number = this.number.split(" ");
      this.number.splice(6, 1);
      this.number.sort();
      console.log(this.number);
    }

  },
  created() {
    this.getFullNumb();
    this.getWinningNumb();
  }
}
</script>

<style>

</style>