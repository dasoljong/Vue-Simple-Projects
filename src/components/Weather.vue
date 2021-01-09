<template>
  <div class="cityWeatherContainer">
    <h1>Weather</h1>
    <div class="inputWrapper">
      <input
        type="text"
        placeholder="도시 이름"
        @keypress="postCityName"
        v-model="city_name"
      />
      <button class="btn btn-info" @click="getCityWeather">
        날씨 확인하기
      </button>
    </div>
    <div class="contentWrapper" v-bind:class="{ active: isActive }">
      <ul>
        <li>
          <p class="cityName">{{ weather.name }}</p>
          <div class="textContainer">
            <div class="cityWrapper">
              <div>{{ main }}</div>
            </div>
            <div class="tempWrapper">
              <p>현재 온도: {{ Math.floor(temp - 273.15) }}℃</p>
              <p>최저 온도: {{ Math.floor(temp_min - 273.15) }}℃</p>
              <p>최고 온도: {{ Math.floor(temp_max - 273.15) }}℃</p>
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
  name: "city-weather",
  data() {
    return {
      api_key: "e7ce61e3b6edab47392009ebf7de7987",
      city_name: "",
      weather: [],
      main: "",
      temp: "",
      temp_min: "",
      temp_max: "",
      isActive: false
    };
  },
  methods: {
    postCityName: function(e) {
      if (e.key == "Enter") {
        this.city_name =
          this.city_name.charAt(0).toUpperCase() + this.city_name.slice(1);
        this.getCityWeather();
      }
    },
    getCityWeather: function() {
      this.city_name =
        this.city_name.charAt(0).toUpperCase() + this.city_name.slice(1);
      const ajaxURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.city_name}&appid=${this.api_key}`;

      axios
        .get(ajaxURL)
        .then(res => {
          // handle success
          this.weather = res.data;
          this.main = res.data.weather[0].main;
          this.temp = res.data.main.temp;
          this.temp_min = res.data.main.temp_min;
          this.temp_max = res.data.main.temp_max;
          this.isActive = !this.isActive;
        })
        .catch(err => {
          alert("올바른 도시를 검색해주세요.");
          console.log(err);
        })
        .then(() => {
          // always executed
        });
    }
  }
};
</script>

<style>
.cityWeatherContainer {
  margin: 200px 0;
}
.cityWeatherContainer .inputWrapper input {
  margin-right: 10px;
}
.cityWeatherContainer h1 {
  padding-bottom: 20px;
  border-bottom: 1px solid darkgrey;
}
.cityWeatherContainer .btn-info {
  margin: 20px 0;
}
.cityWeatherContainer .contentWrapper {
  display: none;
}
.cityWeatherContainer .contentWrapper.active {
  display: block;
}
.cityWeatherContainer .contentWrapper ul li {
  color: aliceblue;
  display: flex;
  list-style: none;
  width: 100%;
  max-width: 500px;
  background-color: #337ab7;
}
.cityWeatherContainer .contentWrapper ul li .cityName {
  font-size: 50px;
  margin-right: 30px;
}
.cityWeatherContainer .contentWrapper ul li .textContainer {
  text-align: end;
}
.cityWeatherContainer .contentWrapper ul li .textContainer .cityWrapper {
  font-size: 30px;
}
.cityWeatherContainer
  .contentWrapper
  ul
  li
  .textContainer
  .tempWrapper
  p:first-child {
  font-size: 20px;
}
</style>
