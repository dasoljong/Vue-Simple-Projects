<template>
  <div class="randomProfileContainer">
    <h1>Random User</h1>
    <button class="btn btn-info" @click="randomProfile">
      랜덤 유저 가져오기
    </button>
    <div class="personalCardWrapper">
      <div><img :src="randomUser.avatar" :alt="randomUser.first_name" /></div>
      <span>{{ randomUser.first_name }} {{ randomUser.last_name }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "randomProfileContainer",
  data() {
    return {
      randomUser: "",
      users: [],
      randomNum: 0
    };
  },
  methods: {
    randomProfile: function() {
      axios
        .get("https://reqres.in/api/users?page=2")
        .then(res => {
          // handle success
          this.users = res.data.data; // data 가져와서 users에 json으로 저장
          this.randomNum = Math.floor(Math.random() * this.users.length); // random number 생성
          this.randomUser = this.users[this.randomNum];
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
};
</script>

<style scoped>
.randomProfileContainer {
  margin: 200px 0;
}
.randomProfileContainer h1 {
  padding-bottom: 20px;
  border-bottom: 1px solid darkgrey;
}
.randomProfileContainer .btn-info {
  margin: 20px 0;
}
</style>
