<template>
  <div class="currentTimeContainer">
    <h1>Current Time</h1>
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
  name: 'current-time',
  data(){
    return{

    }
  }
}
</script>

<style lang="scss"></style>