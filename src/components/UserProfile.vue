<template>
  <div class="userProfileContainer">
    <h1>User Profile</h1>
    <button class="btn btn-info" @click="getProfile">프로필 정보 가져오기</button>
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
  name: "userProfile",
  data() {
    return {
      users: []
    }
  },
  methods: {
    getProfile: function() {
      axios.get('https://reqres.in/api/users?page=2')
          .then(res => {
            // handle success
            console.log(res);
            this.users = res.data.data
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
.userProfileContainer {
  margin: 200px 0;
}
.userProfileContainer h1{
  padding-bottom: 20px;
  border-bottom: 1px solid darkgrey;
}
.userProfileContainer .btn-info {
  margin: 20px 0;
}
.userProfileContainer ul {
  width: 100%;
  display: flex;
  padding-left: unset;
}
.userProfileContainer ul li {
  list-style: none;
  width: 33%;
}
</style>
