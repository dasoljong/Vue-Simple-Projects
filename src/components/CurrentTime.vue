<template>
  <div class="currentTimeContainer">
    <img
        class="bgImg"
        src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
        alt="error image"
    />
    <h1>Current Time</h1>
    <div class="currentTimeContentContainer">
      <div class="currentTimeEl hours-c">
        <p class="big-text" id="hours">{{ this.hours }}</p>
        <span>:</span>
      </div>
      <div class="currentTimeEl minutes-c">
        <p class="big-text" id="minutes">{{ this.minutes }}</p>
        <span>:</span>
      </div>
      <div class="currentTimeEl seconds-c">
        <p class="big-text" id="seconds">{{ this.seconds }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "current-time",
  data() {
    return {
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  methods: {
    getTime: function () {
      const today = new Date();
      const hoursGot = today.getHours();
      const minutesGot = today.getMinutes();
      const secondsGot = today.getSeconds();

      this.hours = hoursGot;
      this.minutes = minutesGot;
      this.seconds = secondsGot;
    },
  },
  created() {
    this.getTime();
    setInterval(this.getTime, 1000);
  },
};
</script>

<style lang="scss">
.currentTimeContainer {
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
  .currentTimeContentContainer {
    display: flex;
    margin-top: 3rem;
    z-index: 999;
    .currentTimeEl {
      display: flex;
      text-align: center;
      .big-text {
        font-size: 6rem;
        font-weight: bold;
        line-height: 1;
        margin: 0 2rem;
      }
      span {
        font-size: 6rem;
        font-weight: bold;
        line-height: 1;
        margin: 0 2rem;
      }
    }
  }
}
</style>
