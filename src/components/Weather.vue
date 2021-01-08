<template>
  <div class="cityWeatherContainer">
    <h1>Weather of Major Cities</h1>
    <button class="btn btn-info" @click="getCityWeather">날씨 확인하기</button>
    <div class="contentWrapper">
      <ul>
        <li>
          <img src="" alt="Weather Icon" />
          <div class="textContainer">
            <div class="cityWrapper">
              <span>Seoul, </span>
              <span>Korea</span>
            </div>
            <div class="tempWrapper">
              <p>33.3c</p>
              <p>min: 11.1c</p>
              <p>max: 99.9c</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'city weather',
  data () {
    return {

    }
  },
  methods: {
    getCityWeather: function(){
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=e7ce61e3b6edab47392009ebf7de7987')
          .then(res => {
            // handle success
            console.log(res);
          })
          .catch(err => {
            // handle error
            console.log(err);
          })
          .then(() => {
            // always executed
          });
    }
  }

}
</script>

<style>
.cityWeatherContainer {
  margin: 200px 0;
}
.cityWeatherContainer h1{
  padding-bottom: 20px;
  border-bottom: 1px solid darkgrey;
}
.cityWeatherContainer .btn-info {
  margin: 20px 0;
}
.cityWeatherContainer .contentWrapper {

}
.cityWeatherContainer .contentWrapper ul li {
  color: aliceblue;
  display: flex;
  list-style: none;
  width: 300px;
  background-color: #337AB7;
}
.cityWeatherContainer .contentWrapper ul li .textContainer {
  text-align: end;
}
.cityWeatherContainer .contentWrapper ul li .textContainer .cityWrapper {
  font-size: 30px;
}
</style>