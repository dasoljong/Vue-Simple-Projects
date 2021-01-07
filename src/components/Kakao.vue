<template>
  <div class="kakaoProfileContainer">
    <h1>My KaKao Profile</h1>
    <button class="btn btn-info" @click="getKakaoProfile">프로필 정보 가져오기</button>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <td>NAME</td>
            <td>Pic.</td>
            <td>Nationality</td>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{}}</td>
          <td>{{}}</td>
          <td>{{}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "kakaoProfile",
  data() {
    return {
      contents: []
    }
  },
  methods: {
    getKakaoProfile: function() {
      axios.get('https://kapi.kakao.com/v1/api/talk/profile')
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
.kakaoProfileContainer {
  margin: 200px 0;
}
.kakaoProfileContainer h1{
  padding-bottom: 20px;
  border-bottom: 1px solid darkgrey;
}
.kakaoProfileContainer .btn-info {
  margin-top: 20px;
}
</style>
