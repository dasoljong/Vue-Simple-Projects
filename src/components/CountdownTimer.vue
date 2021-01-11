<template>
  <div class="countdownTimerContainer">
    <img
      class="bgImg"
      src="https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3670&q=80"
      alt="error image"
    />
    <h1>Until My Birth Day</h1>
    <div class="countdownContentContainer">
      <div class="countdownEl days-c">
        <p class="big-text" id="days">{{ this.days }}</p>
        <span>days</span>
      </div>
      <div class="countdownEl hours-c">
        <p class="big-text" id="hours">{{ this.hours }}</p>
        <span>hours</span>
      </div>
      <div class="countdownEl mins-c">
        <p class="big-text" id="mins">{{ this.minutes }}</p>
        <span>mins</span>
      </div>
      <div class="countdownEl seconds-c">
        <p class="big-text" id="seconds">{{ this.seconds }}</p>
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
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  methods: {
    startCountdown: function () {
      const eventDate = new Date(this.dday);
      const currentDate = new Date();
      const totalSeconds = (eventDate - currentDate) / 1000;

      const daysLeft = Math.floor(totalSeconds / 3600 / 24);
      const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
      const minutesLeft = Math.floor(totalSeconds / 60) % 60;
      const secondsLeft = Math.floor(totalSeconds) % 60;

      this.days = daysLeft;
      this.hours = hoursLeft;
      this.minutes = minutesLeft;
      this.seconds = secondsLeft;
    },
  },
  created() {
    this.startCountdown();

    setInterval(this.startCountdown, 1000);
  },
};
</script>

<style lang="scss">
.countdownTimerContainer {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .bgImg {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 990;
  }
  h1 {
    font-weight: bold;
    font-size: 4rem;
    margin-top: 5rem;
    z-index: 999;
  }
  .countdownContentContainer {
    display: flex;
    margin-top: 3rem;
    z-index: 999;
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
