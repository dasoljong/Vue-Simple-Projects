<template>
  <div class="randomProfileContainer">
    <h1>Random User</h1>
    <button class="btn btn-info" @click="randomProfile">랜덤 유저 가져오기</button>
    <div class="personalCardWrapper">
      <ul>
        <li v-for="user in users" v-bind:key="user">
          <div><img :src="user.avatar" :alt="user.first_name"></div>
          <span>{{user.first_name}} {{user.last_name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "randomProfileContainer",
  data() {
    return {
      users: [],
      randomNum: 0,
    }
  },
  methods: {
    randomProfile: function() {
      axios.get('https://reqres.in/api/users?page=2')
          .then(res => {
            // handle success
            this.users = res.data.data
            this.randomNum = Math.floor(Math.random() * this.users.length)
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
.randomProfileContainer {
  margin: 200px 0;
}
.randomProfileContainer h1{
  padding-bottom: 20px;
  border-bottom: 1px solid darkgrey;
}
.randomProfileContainer .btn-info {
  margin: 20px 0;
}
.randomProfileContainer ul {
  width: 100%;
  display: flex;
  padding-left: unset;
}
.randomProfileContainer ul li {
  display: none;
  list-style: none;
  width: 33%;
}
</style>
