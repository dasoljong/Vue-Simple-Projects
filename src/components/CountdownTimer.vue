<template>
  <div class="countdownTimerContainer">
    <h1>Until My Birth Day</h1>
    <div class="countdownContentContainer">
      <div class="countdownEl days-c">
        <p class="big-text" id="days">{{this.days}}</p>
        <span>days</span>
      </div>
      <div class="countdownEl hours-c">
        <p class="big-text" id="hours">{{this.hours}}</p>
        <span>hours</span>
      </div>
      <div class="countdownEl mins-c">
        <p class="big-text" id="mins">{{this.minutes}}</p>
        <span>mins</span>
      </div>
      <div class="countdownEl seconds-c">
        <p class="big-text" id="seconds">{{this.seconds}}</p>
        <span>seconds</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountdownTimer",
  data() {
    return {
      dday: "8 July 2021",
      days: '',
      hours:'',
      minutes:'',
      seconds: '',
    };
  },
  methods: {
    startCountdown: function () {
      const eventDate = new Date(this.dday);
      const currentDate = new Date();
      const totalSeconds = (eventDate - currentDate) / 1000;

      const days_ = Math.floor(totalSeconds / 3600 / 24);
      const hours_ = Math.floor(totalSeconds/3600) % 24;
      const minutes_ = Math.floor(totalSeconds / 60) % 60;
      const seconds_ = Math.floor(totalSeconds) % 60

      this.days = days_;
      this.hours = hours_;
      this.minutes = minutes_;
      this.seconds = seconds_;

    },
  },
  created() {
    this.startCountdown();

    setInterval(this.startCountdown, 1000);
  },
};
</script>

<style lang="scss">
body {
  background-image: url("https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3670&q=80");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.countdownTimerContainer {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  h1 {
    font-weight: bold;
    font-size: 4rem;
    margin-top: 5rem;
  }
  .countdownContentContainer {
    margin-top: 3rem;
    display: flex;
    .countdownEl {
      text-align: center;
      .big-text {
        font-size: 6rem;
        font-weight: bold;
        line-height: 1;
        margin: 0 2rem;
      }
      span {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
