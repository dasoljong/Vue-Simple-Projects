<template>
  <div class="addressBook">
    <h1>Books Info::List</h1>
    <button class="btn btn-info" @click="getCustomerInfo()">New Entry</button>
    <div class="mainContentContainer">
      <table class="tableContainer">
        <thead class="tableHead">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>YEAR</th>
          <th>Cover Color</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="user in users"  v-bind:key="user">
            <td><a href=""></a>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.year}}</td>
            <td>{{user.color}}</td>
            <td>{{user}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'address-book',
  data() {
    return {
      users: []
    };
  },
  methods: {
    getCustomerInfo: function(){
      axios.get('https://reqres.in/api/unknown')
          .then( res => {
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
    },
  }
}

</script>


<style>
.addressBook {
  margin-top: 200px;
}
.addressBook h1 {
  width: 100%;
  border-bottom: 1px solid darkgrey;
  padding-bottom: 20px;
  margin-bottom: unset;
}
.addressBook .btn {
  margin: 20px 0;
}

.addressBook .tableContainer {
  width: 100%;
}
.addressBook .tableHead {
  width: 100%;
  background-color: black;
}
.addressBook .tableContainer tr th {
  padding: 10px 20px;
  color: aliceblue;
}

tbody tr td:last-child {
  display: none;
}
</style>